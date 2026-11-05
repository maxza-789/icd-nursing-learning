/* Isolated simulation persistence. Existing course keys are never accessed. */
'use strict';
(() => {
  const ns = globalThis.NEOICDSimulation;
  const KEY = 'neoIcdSimulationV1';
  const MAX_ATTEMPTS = 5;
  const isRecord = value => value !== null && typeof value === 'object' && !Array.isArray(value);
  const isId = value => typeof value === 'string' && /^[a-z][a-z0-9-]{0,63}$/.test(value);
  const clone = value => JSON.parse(JSON.stringify(value));
  const own = (object, key) => Object.prototype.hasOwnProperty.call(object, key);
  function validateContent(content) {
    if (!isRecord(content) || !Array.isArray(content.cases) || !content.cases.length) throw Error('Invalid simulation content');
    const ids = new Set();
    const unique = id => { if (!isId(id) || ids.has(id)) throw Error('Duplicate or invalid ID: ' + id); ids.add(id); };
    const text = value => typeof value === 'string' && value.trim().length > 0;
    const list = value => Array.isArray(value) && value.length > 0 && value.every(text);
    if (!isRecord(content.indicators) || !['demonstrated','partial','review','insufficient'].every(id => text(content.indicators[id]))) throw Error('Missing evidence indicators');
    if (!Array.isArray(content.criteria) || !Array.isArray(content.topics)) throw Error('Missing rubric or topics');
    content.criteria.forEach(item => { unique(item.id); if (!text(item.label)) throw Error('Missing criterion label'); });
    const criteria = new Set(content.criteria.map(item => item.id));
    const topics = new Set();
    content.topics.forEach(item => { if (!isId(item.id) || topics.has(item.id) || !text(item.label) || !Number.isInteger(item.module) || item.module < 0 || item.module >= 12 || !Number.isInteger(item.section) || item.section < 0) throw Error('Invalid topic'); topics.add(item.id); });
    const refs = value => Array.isArray(value) && value.length > 0 && value.every(id => topics.has(id));
    ids.clear(); // Content identifiers are separate from rubric identifiers.
    content.cases.forEach(item => {
      unique(item.id);
      if (item.fictional !== true || item.reviewStatus !== 'pending-specialist-review' || item.draftLabel !== 'DRAFT — PENDING SPECIALIST REVIEW' || !/^\d+\.\d+(?:\.\d+)?$/.test(item.contentVersion) || !text(item.title) || !text(item.intro) || !list(item.objectives)) throw Error('Invalid case metadata');
      if (!isRecord(item.metadata) || !Array.isArray(item.metadata.sources) || !item.metadata.sources.length || !list(item.metadata.localApprovalRequired) || !['reviewerName','reviewerRole','reviewedAt','nextReviewAt','institutionalApproval'].every(key => own(item.metadata,key))) throw Error('Missing review metadata');
      if (item.id==='case-clinical-deterioration' && !['reviewerName','reviewerRole','reviewedAt','nextReviewAt','institutionalApproval','approvalDate'].every(key=>item.metadata[key]===null)) throw Error('Case 3 must retain empty review and approval metadata');
      if (!Array.isArray(item.stages) || item.stages.length < 2) throw Error('Missing stages');
      item.stages.forEach(stage => {
        unique(stage.id);
        if (!text(stage.title) || !text(stage.question) || !list(stage.observations) || !list(stage.knownInformation) || !list(stage.missingInformation) || !refs(stage.relatedReviewTopics) || !Array.isArray(stage.learningEvidenceCriteria) || !stage.learningEvidenceCriteria.length || !stage.learningEvidenceCriteria.every(id => criteria.has(id)) || !Array.isArray(stage.choices) || stage.choices.length < 2) throw Error('Incomplete stage');
        stage.choices.forEach(choice => {
          unique(choice.id);
          if (!text(choice.text) || !isRecord(choice.explanation) || !['support','missing','alternative','communication'].every(key => text(choice.explanation[key])) || !refs(choice.reviewTopics) || !Array.isArray(choice.learningEvidence) || !choice.learningEvidence.length || !choice.learningEvidence.every(e => criteria.has(e.criterion) && own(content.indicators,e.indicator))) throw Error('Incomplete choice feedback');
          if(['case-system-observations','case-clinical-deterioration'].includes(item.id) && (!['learningPoint','supportingEvidence','missingInformation','alternativeReasoning','communicationPoint'].every(key=>text(choice[key])) || !refs(choice.reviewTopicIds) || choice.supportingEvidence!==choice.explanation.support || choice.missingInformation!==choice.explanation.missing || choice.alternativeReasoning!==choice.explanation.alternative || choice.communicationPoint!==choice.explanation.communication || JSON.stringify(choice.reviewTopicIds)!==JSON.stringify(choice.reviewTopics)))throw Error('Incomplete extended feedback');
        });
      });
      if (!isRecord(item.debrief) || !text(item.debrief.summary) || !list(item.debrief.learningPoints) || !list(item.debrief.reflection)) throw Error('Incomplete debrief');
    });
    return true;
  }
  function createStore(caseData, storageProvider = () => globalThis.localStorage) {
    const empty = () => ({schemaVersion:1,caseId:caseData.id,attemptCount:0,attempts:[]});
    let data = empty();
    let message = '';
    let readOnly = false;
    function sanitize(raw, target = caseData) {
      if (!isRecord(raw) || raw.schemaVersion !== 1 || raw.caseId !== target.id || !Number.isSafeInteger(raw.attemptCount) || raw.attemptCount < 0 || raw.attemptCount > 1000000000 || !Array.isArray(raw.attempts)) throw Error('Invalid stored schema');
      const seen = new Set();
      const attempts = [];
      let corrected = raw.attempts.length > MAX_ATTEMPTS;
      for (const attempt of raw.attempts.slice(-MAX_ATTEMPTS)) {
        if (!isRecord(attempt) || typeof attempt.id !== 'string' || !/^attempt-[1-9][0-9]{0,9}$/.test(attempt.id) || seen.has(attempt.id) || !/^\d{1,4}\.\d{1,4}(?:\.\d{1,4})?$/.test(attempt.contentVersion) || !isRecord(attempt.selections)) { corrected=true; continue; }
        seen.add(attempt.id);
        const selections = {};
        const current = attempt.contentVersion === target.contentVersion;
        let gap = false;
        if (current) {
          for (const stage of target.stages) {
            const selection = attempt.selections[stage.id];
            if (!gap && stage.choices.some(choice => choice.id === selection)) selections[stage.id] = selection;
            else { if (selection !== undefined) corrected=true; gap = true; }
          }
          if (Object.keys(attempt.selections).some(id => !target.stages.some(stage => stage.id === id))) corrected=true;
        } else {
          // Old-version IDs remain archived without interpretation as current evidence.
          for (const [stage,choice] of Object.entries(attempt.selections).slice(0,30)) if (isId(stage) && isId(choice)) selections[stage]=choice; else corrected=true;
        }
        const count = Object.keys(selections).length;
        const complete = current && count === target.stages.length;
        const status = current ? (attempt.status === 'completed' && complete ? 'completed' : 'in-progress') : 'archived';
        let stageId = isId(attempt.stageId) ? attempt.stageId : target.stages[0].id;
        if (current) {
          const requested = target.stages.findIndex(stage => stage.id === stageId);
          const unlocked = Math.min(count,target.stages.length-1);
          if (stageId === 'debrief' && complete) stageId='debrief';
          else stageId=target.stages[requested>=0 && requested<=unlocked ? requested : unlocked].id;
        }
        attempts.push({id:attempt.id,contentVersion:attempt.contentVersion,status,stageId,selections});
      }
      const sequence = Math.max(raw.attemptCount,...attempts.map(a => Number(a.id.slice(8))));
      if (!Number.isSafeInteger(sequence) || sequence>1000000000) throw Error('Invalid attempt sequence');
      if (corrected) message='ข้อมูลบางส่วนไม่ผ่านการตรวจรูปแบบ จึงไม่นำมาใช้ โปรดตรวจประวัติที่แสดง';
      return {schemaVersion:1,caseId:target.id,attemptCount:sequence,attempts};
    }
    const primaryCase = ns.content.cases[0];
    const emptyFor = target => ({schemaVersion:1,caseId:target.id,attemptCount:0,attempts:[]});
    // Keep the legacy Case 1 root record intact; additional cases live in caseRecords.
    // Re-read before every write so independent case stores do not erase each other.
    function readRecords() {
      const raw = storageProvider().getItem(KEY);
      if(raw===null)return {};
      if(typeof raw!=='string'||raw.length>200000)throw Error('Stored data too large');
      const parsed=JSON.parse(raw);
      if(isRecord(parsed)&&parsed.schemaVersion!==1){readOnly=true;message='พบข้อมูลคนละรุ่น schema จึงไม่เขียนทับข้อมูลเดิม ใช้ฝึกชั่วคราวในหน้านี้ได้';return {};}
      if(!isRecord(parsed)||parsed.schemaVersion!==1||!ns.content.cases.some(c=>c.id===parsed.caseId))throw Error('Invalid case root');
      const rawRecords={[parsed.caseId]:parsed};
      if(parsed.caseRecords!==undefined){
        if(!isRecord(parsed.caseRecords))throw Error('Invalid case collection');
        for(const [id,record] of Object.entries(parsed.caseRecords)){
          if(id===parsed.caseId||!ns.content.cases.some(c=>c.id===id)){readOnly=true;message='พบโครงสร้างกรณีที่ไม่รองรับ จึงไม่เขียนทับข้อมูลเดิม ใช้ฝึกชั่วคราวได้';return {};}
          rawRecords[id]=record;
        }
      }
      const records={};
      for(const [id,record] of Object.entries(rawRecords)){
        const target=id===caseData.id?caseData:ns.content.cases.find(c=>c.id===id);
        try {records[id]=sanitize(record,target);}catch(error){records[id]=emptyFor(target);readOnly=true;message='ข้อมูลประวัติบางกรณีไม่สมบูรณ์ จึงไม่เขียนทับข้อมูลเดิม ใช้ฝึกชั่วคราวในหน้านี้ได้';}
      }
      return records;
    }
    try {data=readRecords()[caseData.id]||empty();}
    catch(error){message='อ่านความคืบหน้าการฝึกไม่ได้หรือข้อมูลเสียหาย ใช้ฝึกต่อในหน้านี้ได้';}
    function persist() {
      if(readOnly)return;
      try {
        let records;
        try {records=readRecords();}
        catch(error){
          // A corrupt shared envelope must not be replaced by one case's empty state.
          message='บันทึกการฝึกไม่ได้หรือข้อมูลจัดเก็บไม่สมบูรณ์ จึงไม่เขียนทับประวัติเดิม การฝึกครั้งนี้อยู่เฉพาะหน้านี้';return;
        }
        if(readOnly)return;
        records[caseData.id]=data;
        const primary=records[primaryCase.id]||emptyFor(primaryCase);
        const otherRecords={};
        for(const [id,record] of Object.entries(records))if(id!==primaryCase.id)otherRecords[id]=record;
        const envelope={...primary};
        if(Object.keys(otherRecords).length)envelope.caseRecords=otherRecords;
        storageProvider().setItem(KEY,JSON.stringify(envelope));message='';
      }catch(error){message='บันทึกการฝึกไม่ได้ ความคืบหน้าจะอยู่เฉพาะหน้านี้ โปรดตรวจพื้นที่จัดเก็บของเบราว์เซอร์';}
    }
    function find(id) {return data.attempts.find(attempt => attempt.id===id && attempt.contentVersion===caseData.contentVersion);}
    return {
      snapshot: () => clone(data),
      notice: () => message,
      latest: () => {const found=[...data.attempts].reverse().find(a=>a.contentVersion===caseData.contentVersion);return found?clone(found):null;},
      start() {
        if (data.attemptCount>=1000000000) return null;
        const attempt={id:'attempt-'+(++data.attemptCount),contentVersion:caseData.contentVersion,status:'in-progress',stageId:caseData.stages[0].id,selections:{}};
        data.attempts.push(attempt);data.attempts=data.attempts.slice(-MAX_ATTEMPTS);persist();return clone(attempt);
      },
      select(id,stageId,choiceId) {
        const attempt=find(id),index=caseData.stages.findIndex(stage=>stage.id===stageId);
        if (!attempt || attempt.status==='completed' || index<0 || !caseData.stages[index].choices.some(c=>c.id===choiceId) || caseData.stages.slice(0,index).some(stage=>!own(attempt.selections,stage.id)) || own(attempt.selections,stageId)) return false;
        attempt.selections[stageId]=choiceId;persist();return true;
      },
      navigate(id,stageId) {
        const attempt=find(id);if(!attempt)return false;
        const index=caseData.stages.findIndex(stage=>stage.id===stageId);
        if(stageId==='debrief') {if(caseData.stages.some(stage=>!own(attempt.selections,stage.id)))return false;}
        else if(index<0 || caseData.stages.slice(0,index).some(stage=>!own(attempt.selections,stage.id)))return false;
        attempt.stageId=stageId;persist();return true;
      },
      complete(id) {const attempt=find(id);if(!attempt || caseData.stages.some(stage=>!own(attempt.selections,stage.id)))return false;attempt.status='completed';attempt.stageId='debrief';persist();return true;}
    };
  }
  ns.storage={KEY,MAX_ATTEMPTS,validateContent,createStore};
})();
