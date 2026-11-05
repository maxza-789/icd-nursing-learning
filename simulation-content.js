/* Fictional educational content only. Specialist and institutional review required. */
'use strict';
globalThis.NEOICDSimulation = globalThis.NEOICDSimulation || {};
globalThis.NEOICDSimulation.content = {
  "draftLabel": "DRAFT — PENDING SPECIALIST REVIEW",
  "indicators": {
    "demonstrated": "พบหลักฐานในแบบฝึก (Evidence demonstrated in exercise)",
    "partial": "พบหลักฐานบางส่วน (Partial evidence)",
    "review": "แนะนำให้ทบทวนหัวข้อ (Topic recommended for review)",
    "insufficient": "ข้อมูลไม่เพียงพอสำหรับพิจารณา (Insufficient information to assess)"
  },
  "criteria": [
    {
      "id": "patient-first",
      "label": "ประเมินผู้ป่วยร่วมกับระบบ"
    },
    {
      "id": "baseline",
      "label": "เปรียบเทียบ baseline"
    },
    {
      "id": "missing",
      "label": "ระบุข้อมูลที่ขาด"
    },
    {
      "id": "prioritization",
      "label": "จัดลำดับและรายงาน"
    },
    {
      "id": "communication",
      "label": "สื่อสารเป็นโครงสร้าง"
    },
    {
      "id": "reflection",
      "label": "สะท้อนคิดด้วยตนเอง"
    }
  ],
  "topics": [
    {
      "id": "patient-first",
      "label": "การประเมินผู้ป่วยก่อนอุปกรณ์ (Patient-first assessment)",
      "module": 5,
      "section": 0
    },
    {
      "id": "baseline",
      "label": "การเปรียบเทียบข้อมูลตั้งต้น (Baseline)",
      "module": 5,
      "section": 0
    },
    {
      "id": "missing",
      "label": "การแปลผลร่วมกับบริบท (Clinical interpretation)",
      "module": 5,
      "section": 3
    },
    {
      "id": "drain",
      "label": "การสังเกตสายและระบบ (Drain assessment)",
      "module": 5,
      "section": 1
    },
    {
      "id": "trend",
      "label": "แนวโน้มสารระบาย (Drainage trend)",
      "module": 5,
      "section": 2
    },
    {
      "id": "communication",
      "label": "การสื่อสารในทีม (SBAR / closed-loop communication)",
      "module": 8,
      "section": 3
    }
  ],
  "cases": [
    {
      "id": "case-baseline-handover",
      "contentVersion": "1.0.0",
      "title": "กรณีที่ 1: ข้อมูลตั้งต้นและการส่งเวร (Baseline and Handover)",
      "fictional": true,
      "reviewStatus": "pending-specialist-review",
      "draftLabel": "DRAFT — PENDING SPECIALIST REVIEW",
      "intro": "ทารกสมมติ ก เป็นทารกคลอดก่อนกำหนด มีประวัติ RDS และ pneumothorax พร้อมสายระบายทรวงอก (Chest drain) ข้อมูลจะเปิดเผยตามลำดับคงที่ ไม่เปลี่ยนตามตัวเลือก และไม่มีการจำลองผลการรักษา",
      "objectives": [
        "สร้างภาพรวมข้อมูลตั้งต้นของผู้ป่วย (Baseline)",
        "แยกข้อมูลที่ทราบและข้อมูลที่ยังขาด",
        "ระบุการเปลี่ยนแปลงจาก baseline โดยไม่สรุปสาเหตุเกินข้อมูล",
        "พิจารณาผู้ป่วยร่วมกับระบบระบาย",
        "ระบุข้อมูลที่ต้องยืนยัน",
        "ฝึกสื่อสารเป็นโครงสร้างและรายงานต่อทีมผู้รับผิดชอบ"
      ],
      "metadata": {
        "reviewerName": null,
        "reviewerRole": null,
        "reviewedAt": null,
        "nextReviewAt": null,
        "institutionalApproval": null,
        "localApprovalRequired": [
          "ขอบเขตและบทบาทผู้เรียน",
          "แบบประเมินและเป้าหมายเฉพาะราย",
          "ช่องทาง ผู้รับผิดชอบ และเกณฑ์รายงานของหน่วยงาน"
        ],
        "sources": [
          {
            "title": "บทที่ 6: การประเมินและแปลผลทางคลินิก",
            "module": 5,
            "sections": [
              0,
              1,
              2,
              3
            ]
          },
          {
            "title": "บทที่ 9: การสื่อสารในทีม",
            "module": 8,
            "sections": [
              3
            ]
          },
          {
            "title": "AHRQ TeamSTEPPS — SBAR: กรอบการสื่อสารทั่วไป ไม่ใช่แนวทางรักษาทารก",
            "url": "https://www.ahrq.gov/teamstepps-program/curriculum/communication/tools/sbar.html",
            "accessed": "2026-11-05"
          },
          {
            "title": "Neonatal Network South East — Care of Chest Drains §4.6: ใช้กรอบการสังเกต ไม่ใช้ค่าตั้งหรือขั้นตอนเฉพาะหน่วยงาน",
            "url": "https://neonatalnetworkssoutheast.nhs.uk/professionals/guidelines/tvw-guidelines/care-of-chest-drains/",
            "accessed": "2026-11-05"
          }
        ]
      },
      "stages": [
        {
          "id": "baseline",
          "title": "สร้างภาพรวมข้อมูลตั้งต้น (Baseline)",
          "observations": [
            "ข้อมูลส่งเวรสมมติระบุว่า ทารกมี chest drain และการช่วยหายใจไม่เปลี่ยนจากบันทึกก่อนหน้า",
            "เอกสารที่ให้ในขั้นนี้ยังไม่มีรายละเอียดผลประเมินผู้ป่วยและแผลล่าสุด"
          ],
          "knownInformation": [
            "มีประวัติ RDS และ pneumothorax",
            "มีสายระบายทรวงอก และข้อมูลการช่วยหายใจจากการส่งเวร"
          ],
          "missingInformation": [
            "ผลประเมินการหายใจและ perfusion ล่าสุดเทียบ baseline",
            "ตำแหน่งสาย การยึดตรึง แผล และรายละเอียดแนวโน้มสารระบาย",
            "แผนติดตามและข้อมูลส่งต่อที่ต้องยืนยันกับทีม"
          ],
          "question": "ข้อใดอธิบายวิธีสร้าง baseline จากข้อมูลที่มีได้ครอบคลุมกว่า?",
          "choices": [
            {
              "id": "patient-context",
              "text": "รวบรวมข้อมูลผู้ป่วยเทียบกับบันทึกก่อนหน้า พร้อมทบทวนระบบระบายและแผนที่ต้องยืนยัน",
              "explanation": {
                "support": "ข้อมูลการช่วยหายใจที่ส่งต่อมาเป็นส่วนหนึ่งของ baseline แต่ยังไม่ใช่ผลประเมินครบถ้วน",
                "missing": "ยังขาดผลประเมินผู้ป่วย แผล ระบบ และแผนติดตาม",
                "alternative": "ข้อมูลไม่เปลี่ยนด้านหนึ่งไม่ยืนยันว่าทุกด้านเหมือนเดิม",
                "communication": "สื่อสารข้อมูลที่มีและรายการที่ยังต้องยืนยันกับผู้รับเวรและทีมผู้รับผิดชอบ"
              },
              "learningEvidence": [
                {
                  "criterion": "patient-first",
                  "indicator": "demonstrated"
                },
                {
                  "criterion": "baseline",
                  "indicator": "demonstrated"
                },
                {
                  "criterion": "missing",
                  "indicator": "demonstrated"
                }
              ],
              "reviewTopics": [
                "patient-first",
                "baseline"
              ]
            },
            {
              "id": "device-only",
              "text": "เริ่มสรุปจากข้อมูลอุปกรณ์เป็นหลัก โดยยังไม่เชื่อมกับผลประเมินผู้ป่วย",
              "explanation": {
                "support": "การทบทวนระบบระบายเป็นส่วนหนึ่งของการประเมิน",
                "missing": "ผลประเมินผู้ป่วยและ baseline ยังไม่ครบ",
                "alternative": "ข้อมูลอุปกรณ์เพียงอย่างเดียวไม่เพียงพอสำหรับภาพรวมผู้ป่วย",
                "communication": "ระบุช่องว่างข้อมูลผู้ป่วยในการส่งต่อและขอทีมร่วมยืนยัน"
              },
              "learningEvidence": [
                {
                  "criterion": "patient-first",
                  "indicator": "review"
                },
                {
                  "criterion": "baseline",
                  "indicator": "partial"
                }
              ],
              "reviewTopics": [
                "patient-first",
                "drain"
              ]
            },
            {
              "id": "support-only",
              "text": "ใช้ข้อความว่าการช่วยหายใจไม่เปลี่ยนเป็นข้อสรุปภาพรวมของการรับเวร",
              "explanation": {
                "support": "มีข้อความเรื่องการช่วยหายใจไม่เปลี่ยนจริงในข้อมูลสมมติ",
                "missing": "ยังไม่มีผลประเมินด้านอื่นเพื่อสนับสนุนข้อสรุปภาพรวม",
                "alternative": "ความคงที่ของข้อมูลบางด้านอาจอยู่ร่วมกับข้อมูลที่ยังไม่ทราบ",
                "communication": "บอกทีมว่าข้อสรุปจำกัดอยู่ที่ข้อมูลส่งต่อเรื่องการช่วยหายใจ"
              },
              "learningEvidence": [
                {
                  "criterion": "baseline",
                  "indicator": "partial"
                },
                {
                  "criterion": "missing",
                  "indicator": "review"
                }
              ],
              "reviewTopics": [
                "baseline",
                "missing"
              ]
            }
          ],
          "relatedReviewTopics": [
            "patient-first",
            "baseline",
            "drain",
            "missing"
          ],
          "learningEvidenceCriteria": [
            "patient-first",
            "baseline",
            "missing"
          ]
        },
        {
          "id": "confirmation",
          "title": "แยกข้อมูลที่ทราบจากสิ่งที่ต้องยืนยัน",
          "observations": [
            "เปิดเผยเพิ่ม: มีบันทึกสารระบาย แต่เอกสารที่ให้ยังไม่แสดงช่วงเวลาของแต่ละรายการ",
            "มีบันทึกว่าตรวจระบบระบายแล้ว แต่ไม่มีรายละเอียดตำแหน่งสาย แผล หรือสิ่งที่สังเกตในแต่ละห้อง"
          ],
          "knownInformation": [
            "มีบันทึกสารระบายและการตรวจระบบ",
            "รายละเอียดที่ให้ยังไม่พอสำหรับเปรียบเทียบแนวโน้ม"
          ],
          "missingInformation": [
            "เวลา หน่วยวัด และลักษณะสารระบายที่เทียบกันได้",
            "รายละเอียดการสังเกตระบบและแผลตามชนิดอุปกรณ์",
            "ผลประเมินผู้ป่วยในช่วงเวลาเดียวกัน"
          ],
          "question": "ควรอธิบายข้อจำกัดของข้อมูลนี้อย่างไร?",
          "choices": [
            {
              "id": "confirm-context",
              "text": "ระบุรายละเอียดที่ขาด และเชื่อมเวลา ข้อมูลผู้ป่วย สารระบาย และระบบก่อนสรุปแนวโน้ม",
              "explanation": {
                "support": "มีบันทึกอยู่จริง แต่รายละเอียดเวลาและการประเมินยังไม่ครบ",
                "missing": "ต้องยืนยันเวลา หน่วยวัด และผลประเมินร่วมในช่วงเดียวกัน",
                "alternative": "ความต่างของช่วงเวลาหรือรูปแบบบันทึกอาจทำให้เปรียบเทียบผิด",
                "communication": "ส่งต่อรายการข้อมูลที่ขาดและขอทีมร่วมยืนยันก่อนใช้เป็นข้อสรุป"
              },
              "learningEvidence": [
                {
                  "criterion": "missing",
                  "indicator": "demonstrated"
                },
                {
                  "criterion": "baseline",
                  "indicator": "demonstrated"
                }
              ],
              "reviewTopics": [
                "trend",
                "missing"
              ]
            },
            {
              "id": "record-exists",
              "text": "ถือว่ามีแบบบันทึกแล้ว จึงมีข้อมูลเพียงพอสำหรับสรุปแนวโน้ม",
              "explanation": {
                "support": "มีแบบบันทึก แต่การมีเอกสารไม่ยืนยันความครบถ้วน",
                "missing": "รายละเอียดเวลาและบริบทผู้ป่วยยังไม่ทราบ",
                "alternative": "ข้อมูลอาจยังเปรียบเทียบต่อเนื่องไม่ได้แม้มีหลายรายการ",
                "communication": "บอกทีมว่าเอกสารมีอยู่แต่รายละเอียดที่จำเป็นยังต้องยืนยัน"
              },
              "learningEvidence": [
                {
                  "criterion": "missing",
                  "indicator": "review"
                }
              ],
              "reviewTopics": [
                "trend",
                "missing"
              ]
            },
            {
              "id": "drainage-only",
              "text": "ขอยืนยันเฉพาะข้อมูลสารระบาย โดยยังไม่รวมข้อมูลผู้ป่วยและระบบ",
              "explanation": {
                "support": "การยืนยันข้อมูลสารระบายช่วยให้เห็นแนวโน้มส่วนหนึ่ง",
                "missing": "ยังขาดข้อมูลผู้ป่วยและระบบในบริบทเดียวกัน",
                "alternative": "แนวโน้มสารระบายเพียงอย่างเดียวไม่อธิบายภาพรวม",
                "communication": "สื่อสารด้วยว่าข้อมูลผู้ป่วยและอุปกรณ์ยังไม่ครบ"
              },
              "learningEvidence": [
                {
                  "criterion": "missing",
                  "indicator": "partial"
                },
                {
                  "criterion": "patient-first",
                  "indicator": "partial"
                }
              ],
              "reviewTopics": [
                "patient-first",
                "trend"
              ]
            }
          ],
          "relatedReviewTopics": [
            "trend",
            "missing",
            "patient-first"
          ],
          "learningEvidenceCriteria": [
            "missing",
            "baseline",
            "patient-first"
          ]
        },
        {
          "id": "changes",
          "title": "รับรู้การเปลี่ยนแปลงจากข้อมูลตั้งต้น",
          "observations": [
            "ข้อมูลสมมติตามลำดับกรณี: ข้อสังเกตล่าสุดบรรยายว่าทารกมี work of breathing เพิ่มจากบันทึกตั้งต้น",
            "ข้อมูลระบบยังไม่ครบพอที่จะยืนยันสาเหตุของการเปลี่ยนแปลงนี้",
            "ข้อสังเกตนี้กำหนดไว้ล่วงหน้า ไม่ได้เกิดจากตัวเลือกของผู้เรียน"
          ],
          "knownInformation": [
            "มีข้อสังเกตการหายใจเปลี่ยนจาก baseline",
            "ยังไม่ทราบสาเหตุ และไม่มีข้อมูลสำหรับตัดสินการรักษา"
          ],
          "missingInformation": [
            "ผลประเมินผู้ป่วยร่วมด้านอื่นและแนวโน้มล่าสุด",
            "รายละเอียดการช่วยหายใจและระบบที่ต้องยืนยัน",
            "ข้อมูลและแผนจากทีมผู้รับผิดชอบ"
          ],
          "question": "ข้อความใดสะท้อนการจัดลำดับและความไม่แน่นอนได้เหมาะกับการเรียนรู้?",
          "choices": [
            {
              "id": "communicate-change",
              "text": "ระบุการเปลี่ยนแปลง ข้อมูลที่ยังขาด และความจำเป็นในการรายงานทีมผู้รับผิดชอบโดยไม่รอให้ข้อมูลครบ",
              "explanation": {
                "support": "ข้อสังเกตล่าสุดระบุ work of breathing เพิ่มจาก baseline",
                "missing": "ยังขาดผลประเมินร่วมและข้อมูลยืนยันสาเหตุ",
                "alternative": "อาจมีหลายสาเหตุ ไม่ควรโยงกับระบบระบายเพียงอย่างเดียว",
                "communication": "แจ้งการเปลี่ยนแปลงและความไม่แน่นอนต่อทีมผู้รับผิดชอบโดยไม่ชะลอ ตามแนวทางที่หน่วยงานอนุมัติ"
              },
              "learningEvidence": [
                {
                  "criterion": "prioritization",
                  "indicator": "demonstrated"
                },
                {
                  "criterion": "communication",
                  "indicator": "demonstrated"
                },
                {
                  "criterion": "baseline",
                  "indicator": "demonstrated"
                }
              ],
              "reviewTopics": [
                "patient-first",
                "communication"
              ]
            },
            {
              "id": "cause-from-device",
              "text": "สรุปว่าสาเหตุมาจากระบบระบายจากข้อมูลที่ให้ในขั้นนี้",
              "explanation": {
                "support": "ข้อมูลยืนยันเพียงว่าลักษณะการหายใจเปลี่ยน ไม่ได้ยืนยันสาเหตุ",
                "missing": "ข้อมูลผู้ป่วยและระบบยังไม่ครบ",
                "alternative": "สาเหตุอื่นยังไม่ได้รับการพิจารณาจากข้อมูลที่มี",
                "communication": "รายงานสิ่งที่เห็นและข้อจำกัด ไม่ส่งต่อข้อสันนิษฐานเป็นข้อเท็จจริง"
              },
              "learningEvidence": [
                {
                  "criterion": "missing",
                  "indicator": "review"
                },
                {
                  "criterion": "prioritization",
                  "indicator": "partial"
                }
              ],
              "reviewTopics": [
                "missing",
                "patient-first"
              ]
            },
            {
              "id": "complete-data-first",
              "text": "เน้นทำข้อมูลให้ครบก่อน โดยยังไม่ระบุความจำเป็นในการสื่อสารการเปลี่ยนแปลง",
              "explanation": {
                "support": "การระบุข้อมูลที่ขาดมีประโยชน์ แต่มีการเปลี่ยนแปลงจาก baseline แล้ว",
                "missing": "ยังไม่มีข้อมูลครบและไม่ควรใช้เป็นเหตุให้ชะลอการรายงาน",
                "alternative": "การรวบรวมข้อมูลและการสื่อสารกับทีมเป็นคนละประเด็นที่ต้องพิจารณาร่วมกัน",
                "communication": "ในสถานการณ์จริง ไม่รอแบบฝึกหรือรอข้อมูลครบจนชะลอการติดต่อทีมตามระบบหน่วยงาน"
              },
              "learningEvidence": [
                {
                  "criterion": "missing",
                  "indicator": "partial"
                },
                {
                  "criterion": "prioritization",
                  "indicator": "review"
                }
              ],
              "reviewTopics": [
                "communication",
                "baseline"
              ]
            }
          ],
          "relatedReviewTopics": [
            "patient-first",
            "communication",
            "missing",
            "baseline"
          ],
          "learningEvidenceCriteria": [
            "prioritization",
            "communication",
            "baseline",
            "missing"
          ]
        },
        {
          "id": "handover",
          "title": "จัดข้อมูลเพื่อสื่อสาร (SBAR)",
          "observations": [
            "สรุปข้อมูลที่เปิดเผยแล้ว: ทารกสมมติมี chest drain ข้อมูลตั้งต้นบางส่วนยังไม่ครบ และมีข้อสังเกตการหายใจเปลี่ยนจาก baseline",
            "กรณีไม่ให้ผลการรักษาหรือการตอบสนองหลังการสื่อสาร"
          ],
          "knownInformation": [
            "มีประวัติที่เกี่ยวข้องและการเปลี่ยนแปลงที่ต้องสื่อสาร",
            "ยังไม่ยืนยันสาเหตุและไม่กำหนดการรักษา"
          ],
          "missingInformation": [
            "ข้อมูลผู้ป่วยและระบบที่ยังต้องยืนยัน",
            "แผนจากทีมผู้รับผิดชอบและการยืนยันความเข้าใจร่วมกัน"
          ],
          "question": "รูปแบบการส่งต่อใดแยกข้อสังเกต ข้อจำกัด และสิ่งที่ต้องการจากทีมได้ชัดเจน?",
          "choices": [
            {
              "id": "structured-request",
              "text": "S: แจ้งการหายใจเปลี่ยน • B: ประวัติและ baseline • A: สิ่งที่สังเกตกับข้อมูลที่ยังขาด • R: ขอทีมทบทวนและยืนยันแผนตามระบบหน่วยงาน",
              "explanation": {
                "support": "ใช้ข้อมูลที่เปิดเผยครบทั้งบริบท การเปลี่ยนแปลง และข้อจำกัด",
                "missing": "ยังต้องยืนยันรายละเอียดและแผนกับทีมผู้รับผิดชอบ",
                "alternative": "การส่งต่อที่ชัดเจนยังไม่เท่ากับยืนยันสาเหตุหรือการรักษา",
                "communication": "ระบุผู้รับข้อมูลและยืนยันความเข้าใจร่วมกันตามบทบาท ไม่ใช้ข้อความตัวอย่างแทนคำสั่งรักษา"
              },
              "learningEvidence": [
                {
                  "criterion": "communication",
                  "indicator": "demonstrated"
                },
                {
                  "criterion": "missing",
                  "indicator": "demonstrated"
                }
              ],
              "reviewTopics": [
                "communication"
              ]
            },
            {
              "id": "background-only",
              "text": "สื่อสารประวัติและการมีสายระบาย โดยยังไม่ระบุการเปลี่ยนแปลงหรือสิ่งที่ต้องการจากทีม",
              "explanation": {
                "support": "ประวัติเป็นส่วน Background ที่เกี่ยวข้อง",
                "missing": "ยังไม่สื่อสารข้อสังเกตล่าสุด ความไม่แน่นอน และคำขอต่อทีม",
                "alternative": "ประวัติอย่างเดียวไม่แสดงเหตุผลของการติดต่อครั้งนี้",
                "communication": "เพิ่มสถานการณ์ล่าสุด ผลประเมินที่มี ข้อจำกัด และประเด็นที่ขอทีมทบทวน"
              },
              "learningEvidence": [
                {
                  "criterion": "communication",
                  "indicator": "partial"
                }
              ],
              "reviewTopics": [
                "communication",
                "baseline"
              ]
            },
            {
              "id": "assumption-as-fact",
              "text": "ส่งต่อข้อสันนิษฐานเรื่องสาเหตุเสมือนยืนยันแล้ว โดยไม่ระบุข้อมูลที่ขาด",
              "explanation": {
                "support": "กรณีมีข้อสังเกตการเปลี่ยนแปลง แต่ไม่มีหลักฐานยืนยันสาเหตุ",
                "missing": "ยังขาดข้อมูลยืนยันสาเหตุและแผนจากทีม",
                "alternative": "ต้องแยกข้อสังเกตออกจากการตีความ",
                "communication": "สื่อสารข้อมูลที่ทราบ ข้อจำกัด และคำขอทบทวน แทนข้อสรุปที่เกินข้อมูล"
              },
              "learningEvidence": [
                {
                  "criterion": "communication",
                  "indicator": "review"
                },
                {
                  "criterion": "missing",
                  "indicator": "review"
                }
              ],
              "reviewTopics": [
                "missing",
                "communication"
              ]
            }
          ],
          "relatedReviewTopics": [
            "communication",
            "baseline",
            "missing"
          ],
          "learningEvidenceCriteria": [
            "communication",
            "missing"
          ]
        }
      ],
      "debrief": {
        "summary": "กรณีนี้ฝึกจัดข้อมูลตั้งต้น ระบุช่องว่าง เปรียบเทียบการเปลี่ยนแปลง และสื่อสารกับทีม ไม่ให้ผลรักษา ไม่ประเมินความพร้อมปฏิบัติงานอิสระ",
        "learningPoints": [
          "การมีข้อมูลการช่วยหายใจบางส่วนไม่แทนภาพรวม baseline",
          "ข้อมูลผู้ป่วยและระบบต้องตีความร่วมกัน",
          "แยกสิ่งที่สังเกตจากข้อสันนิษฐาน และระบุความไม่แน่นอน",
          "การยืนยันข้อมูลไม่ควรทำให้ชะลอการรายงานเมื่อมีการเปลี่ยนแปลงที่น่ากังวลตามบริบทและแนวทางหน่วยงาน"
        ],
        "reflection": [
          "ข้อมูลใดที่คุณใช้เป็นหลักฐาน และข้อมูลใดที่ยังขาด?",
          "คุณมีข้อสันนิษฐานใดที่ควรยืนยันกับทีม?",
          "คุณจะทำให้การสื่อสารชัดเจนขึ้นอย่างไร โดยไม่สรุปเกินข้อมูล?"
        ]
      }
    },
    {
      "id": "case-system-observations",
      "contentVersion": "1.0.0",
      "title": "การแปลผลข้อสังเกตจากระบบร่วมกับสภาพผู้ป่วย",
      "englishTitle": "System Observations vs Patient Condition",
      "fictional": true,
      "reviewStatus": "pending-specialist-review",
      "draftLabel": "DRAFT — PENDING SPECIALIST REVIEW",
      "intro": "กรณีสมมติของทารกแรกเกิดที่มีสายระบายทรวงอก (Chest drain) ใช้ฝึกแยกข้อมูลผู้ป่วยจากข้อมูลระบบและการตีความที่ยังไม่แน่นอน ข้อสังเกตเปิดเผยตามลำดับคงที่ ไม่เกิดจากคำตอบของผู้เรียน ไม่จำลองการรักษาหรือผลลัพธ์ผู้ป่วย",
      "objectives": [
        "เปรียบเทียบข้อสังเกตปัจจุบันกับข้อมูลตั้งต้น (Baseline)",
        "แยกข้อมูลผู้ป่วย (Patient Data) ออกจากข้อมูลอุปกรณ์ (Device Data)",
        "ระบุข้อมูลที่ยังขาด (Missing Information) ก่อนสรุปความหมาย",
        "หลีกเลี่ยงการสรุปสาเหตุจากสัญญาณเดียว",
        "สื่อสารการเปลี่ยนแปลงและความไม่แน่นอนกับทีมผู้รับผิดชอบ"
      ],
      "metadata": {
        "reviewerName": null,
        "reviewerRole": null,
        "reviewedAt": null,
        "nextReviewAt": null,
        "institutionalApproval": null,
        "localApprovalRequired": [
          "ขอบเขตและบทบาทผู้เรียน",
          "แบบประเมินและเป้าหมายเฉพาะราย",
          "ช่องทาง ผู้รับผิดชอบ และเกณฑ์รายงานของหน่วยงาน"
        ],
        "sources": [
          {
            "title": "บทที่ 6: การประเมินและแปลผลทางคลินิก",
            "module": 5,
            "sections": [
              0,
              1,
              2,
              3
            ]
          },
          {
            "title": "บทที่ 9: การสื่อสารในทีม",
            "module": 8,
            "sections": [
              3
            ]
          },
          {
            "title": "AHRQ TeamSTEPPS — SBAR: กรอบการสื่อสารทั่วไป ไม่ใช่แนวทางรักษาทารก",
            "url": "https://www.ahrq.gov/teamstepps-program/curriculum/communication/tools/sbar.html",
            "accessed": "2026-11-05"
          },
          {
            "title": "Neonatal Network South East — Care of Chest Drains §4.6: ใช้กรอบการสังเกต ไม่ใช้ค่าตั้งหรือขั้นตอนเฉพาะหน่วยงาน",
            "url": "https://neonatalnetworkssoutheast.nhs.uk/professionals/guidelines/tvw-guidelines/care-of-chest-drains/",
            "accessed": "2026-11-05"
          }
        ]
      },
      "stages": [
        {
          "id": "system-identify-change",
          "title": "ระบุสิ่งที่เปลี่ยน (Identify the Change)",
          "observations": [
            "ข้อมูลส่งเวรสมมติระบุว่า work of breathing เพิ่มขึ้นจาก baseline",
            "ยังไม่มีผลประเมินผู้ป่วยร่วมในช่วงเวลาเดียวกัน"
          ],
          "knownInformation": [
            "มีรายงานการหายใจเปลี่ยนจาก baseline",
            "รายงานนี้เป็นข้อมูลส่งเวร ไม่ใช่ผลประเมินร่วมที่ครบถ้วน"
          ],
          "missingInformation": [
            "รายละเอียด baseline และเวลาของข้อมูลที่นำมาเทียบ",
            "ผลประเมินผู้ป่วยร่วมในช่วงเวลาเดียวกัน",
            "ข้อมูลยืนยันสาเหตุของการเปลี่ยนแปลง"
          ],
          "question": "แนวทางใดเปรียบเทียบข้อมูลปัจจุบันกับ baseline โดยไม่สรุปสาเหตุเกินข้อมูล?",
          "choices": [
            {
              "id": "system-compare-baseline",
              "text": "เปรียบเทียบข้อมูลผู้ป่วยและช่วงเวลากับ baseline ก่อนระบุสิ่งที่เปลี่ยน",
              "learningPoint": "เปรียบเทียบสิ่งที่รายงานกับ baseline โดยแยกการเปลี่ยนแปลงออกจากสาเหตุ",
              "supportingEvidence": "มีข้อมูลส่งเวรว่า work of breathing เพิ่มจาก baseline",
              "missingInformation": "รายละเอียด baseline เวลา และผลประเมินผู้ป่วยร่วมยังขาด",
              "alternativeReasoning": "รายงานการเปลี่ยนแปลงยังไม่ยืนยันสาเหตุ และข้อมูลต่างช่วงเวลาอาจเทียบกันไม่ได้",
              "communicationPoint": "แจ้งการเปลี่ยนแปลงและข้อมูลที่ยังขาดต่อทีมผู้รับผิดชอบทันทีตามแนวทางหน่วยงานในสถานการณ์จริง ไม่รอแบบฝึกหรือรอข้อมูลครบ",
              "reviewTopicIds": [
                "baseline",
                "patient-first"
              ],
              "explanation": {
                "support": "มีข้อมูลส่งเวรว่า work of breathing เพิ่มจาก baseline",
                "missing": "รายละเอียด baseline เวลา และผลประเมินผู้ป่วยร่วมยังขาด",
                "alternative": "รายงานการเปลี่ยนแปลงยังไม่ยืนยันสาเหตุ และข้อมูลต่างช่วงเวลาอาจเทียบกันไม่ได้",
                "communication": "แจ้งการเปลี่ยนแปลงและข้อมูลที่ยังขาดต่อทีมผู้รับผิดชอบทันทีตามแนวทางหน่วยงานในสถานการณ์จริง ไม่รอแบบฝึกหรือรอข้อมูลครบ"
              },
              "learningEvidence": [
                {
                  "criterion": "baseline",
                  "indicator": "demonstrated"
                },
                {
                  "criterion": "missing",
                  "indicator": "demonstrated"
                }
              ],
              "reviewTopics": [
                "baseline",
                "patient-first"
              ]
            },
            {
              "id": "system-single-item",
              "text": "สรุปสาเหตุจากข้อมูลระบบระบายเพียงรายการเดียว",
              "learningPoint": "สัญญาณเดียวไม่เพียงพอสำหรับข้อสรุปสาเหตุ",
              "supportingEvidence": "ขั้นนี้ให้เพียงรายงาน work of breathing เพิ่ม ยังไม่มีข้อมูลระบบที่ยืนยันสาเหตุ",
              "missingInformation": "ยังไม่มีผลประเมินร่วมและหลักฐานเชื่อมสาเหตุ",
              "alternativeReasoning": "ไม่ควรนำข้อมูลระบบที่ยังไม่ได้เปิดเผยมาใช้เป็นเหตุผล หรือถือว่าระบบเป็นคำอธิบายเดียว",
              "communicationPoint": "สื่อสารสิ่งที่ทราบและข้อจำกัด แทนการส่งต่อข้อสันนิษฐานเป็นข้อเท็จจริง",
              "reviewTopicIds": [
                "missing",
                "drain"
              ],
              "explanation": {
                "support": "ขั้นนี้ให้เพียงรายงาน work of breathing เพิ่ม ยังไม่มีข้อมูลระบบที่ยืนยันสาเหตุ",
                "missing": "ยังไม่มีผลประเมินร่วมและหลักฐานเชื่อมสาเหตุ",
                "alternative": "ไม่ควรนำข้อมูลระบบที่ยังไม่ได้เปิดเผยมาใช้เป็นเหตุผล หรือถือว่าระบบเป็นคำอธิบายเดียว",
                "communication": "สื่อสารสิ่งที่ทราบและข้อจำกัด แทนการส่งต่อข้อสันนิษฐานเป็นข้อเท็จจริง"
              },
              "learningEvidence": [
                {
                  "criterion": "missing",
                  "indicator": "review"
                },
                {
                  "criterion": "patient-first",
                  "indicator": "review"
                }
              ],
              "reviewTopics": [
                "missing",
                "drain"
              ]
            },
            {
              "id": "system-old-as-current",
              "text": "ถือว่าข้อมูลเดิมยังใช้แทนการประเมินปัจจุบันได้",
              "learningPoint": "ข้อมูลเดิมเป็นฐานเปรียบเทียบ ไม่ใช่ผลประเมินปัจจุบัน",
              "supportingEvidence": "รายงานล่าสุดระบุว่าการหายใจเปลี่ยนจาก baseline",
              "missingInformation": "ผลประเมินผู้ป่วยปัจจุบันร่วมในช่วงเดียวกันยังไม่มี",
              "alternativeReasoning": "ข้อมูลเดิมอาจไม่สะท้อนข้อสังเกตล่าสุด",
              "communicationPoint": "ระบุให้ทีมทราบว่าข้อมูลใดเป็นข้อมูลก่อนหน้าและข้อมูลใดยังต้องยืนยัน",
              "reviewTopicIds": [
                "baseline",
                "patient-first"
              ],
              "explanation": {
                "support": "รายงานล่าสุดระบุว่าการหายใจเปลี่ยนจาก baseline",
                "missing": "ผลประเมินผู้ป่วยปัจจุบันร่วมในช่วงเดียวกันยังไม่มี",
                "alternative": "ข้อมูลเดิมอาจไม่สะท้อนข้อสังเกตล่าสุด",
                "communication": "ระบุให้ทีมทราบว่าข้อมูลใดเป็นข้อมูลก่อนหน้าและข้อมูลใดยังต้องยืนยัน"
              },
              "learningEvidence": [
                {
                  "criterion": "baseline",
                  "indicator": "review"
                },
                {
                  "criterion": "missing",
                  "indicator": "partial"
                }
              ],
              "reviewTopics": [
                "baseline",
                "patient-first"
              ]
            }
          ],
          "relatedReviewTopics": [
            "baseline",
            "patient-first",
            "missing",
            "drain"
          ],
          "learningEvidenceCriteria": [
            "baseline",
            "missing",
            "patient-first"
          ]
        },
        {
          "id": "system-separate-data",
          "title": "แยกข้อมูลผู้ป่วยและอุปกรณ์ (Separate Patient and Device Data)",
          "observations": [
            "เปิดเผยเพิ่ม: มีบันทึกการตรวจระบบระบาย",
            "รายละเอียดเวลาและลักษณะสิ่งที่สังเกตในบันทึกยังไม่ครบ",
            "ไม่มีผลประเมินผู้ป่วยในช่วงเวลาเดียวกัน"
          ],
          "knownInformation": [
            "มีรายงาน work of breathing เพิ่มจาก baseline จากขั้นก่อน",
            "มีบันทึกการตรวจระบบ แต่รายละเอียดไม่ครบ"
          ],
          "missingInformation": [
            "เวลาและลักษณะสิ่งที่สังเกตจากระบบ",
            "ผลประเมินผู้ป่วยในช่วงเวลาเดียวกัน",
            "ข้อมูลที่เชื่อมโยงหรือยืนยันสาเหตุ"
          ],
          "question": "การจำแนกใดแยกสิ่งที่ทราบและสิ่งที่ต้องยืนยันได้ชัดเจน?",
          "choices": [
            {
              "id": "system-classify-data",
              "text": "แยกข้อมูลผู้ป่วย ข้อมูลระบบ เวลา และข้อมูลที่ยังต้องยืนยัน",
              "learningPoint": "ข้อมูลผู้ป่วยและข้อมูลระบบมีหน้าที่ต่างกันและต้องเชื่อมบริบทเวลา",
              "supportingEvidence": "มีรายงานการหายใจเปลี่ยนและมีบันทึกตรวจระบบ แต่ไม่มีผลประเมินผู้ป่วยร่วมในช่วงเดียวกัน",
              "missingInformation": "เวลา รายละเอียดข้อสังเกตระบบ และผลประเมินผู้ป่วยร่วมยังไม่ครบ",
              "alternativeReasoning": "การมีบันทึกตรวจระบบไม่เท่ากับมีผลประเมินผู้ป่วยครบ",
              "communicationPoint": "ส่งต่อข้อมูลสองกลุ่มแยกกันและระบุรายการที่ต้องยืนยันกับทีม",
              "reviewTopicIds": [
                "patient-first",
                "drain"
              ],
              "explanation": {
                "support": "มีรายงานการหายใจเปลี่ยนและมีบันทึกตรวจระบบ แต่ไม่มีผลประเมินผู้ป่วยร่วมในช่วงเดียวกัน",
                "missing": "เวลา รายละเอียดข้อสังเกตระบบ และผลประเมินผู้ป่วยร่วมยังไม่ครบ",
                "alternative": "การมีบันทึกตรวจระบบไม่เท่ากับมีผลประเมินผู้ป่วยครบ",
                "communication": "ส่งต่อข้อมูลสองกลุ่มแยกกันและระบุรายการที่ต้องยืนยันกับทีม"
              },
              "learningEvidence": [
                {
                  "criterion": "patient-first",
                  "indicator": "demonstrated"
                },
                {
                  "criterion": "missing",
                  "indicator": "demonstrated"
                }
              ],
              "reviewTopics": [
                "patient-first",
                "drain"
              ]
            },
            {
              "id": "system-record-replaces-patient",
              "text": "ใช้บันทึกตรวจระบบแทนการประเมินผู้ป่วย",
              "learningPoint": "บันทึกอุปกรณ์ไม่ทดแทนข้อมูลประเมินผู้ป่วย",
              "supportingEvidence": "ขั้นนี้ยืนยันเพียงว่ามีบันทึกตรวจระบบและรายละเอียดไม่ครบ",
              "missingInformation": "ยังไม่มีผลประเมินผู้ป่วยร่วมในช่วงเวลาเดียวกัน",
              "alternativeReasoning": "ข้อมูลระบบและการตอบสนองของผู้ป่วยต้องพิจารณาแยกก่อนเชื่อมกัน",
              "communicationPoint": "บอกทีมว่าบันทึกระบบมีอยู่แต่ข้อมูลประเมินผู้ป่วยยังขาด",
              "reviewTopicIds": [
                "patient-first",
                "drain"
              ],
              "explanation": {
                "support": "ขั้นนี้ยืนยันเพียงว่ามีบันทึกตรวจระบบและรายละเอียดไม่ครบ",
                "missing": "ยังไม่มีผลประเมินผู้ป่วยร่วมในช่วงเวลาเดียวกัน",
                "alternative": "ข้อมูลระบบและการตอบสนองของผู้ป่วยต้องพิจารณาแยกก่อนเชื่อมกัน",
                "communication": "บอกทีมว่าบันทึกระบบมีอยู่แต่ข้อมูลประเมินผู้ป่วยยังขาด"
              },
              "learningEvidence": [
                {
                  "criterion": "patient-first",
                  "indicator": "review"
                },
                {
                  "criterion": "missing",
                  "indicator": "partial"
                }
              ],
              "reviewTopics": [
                "patient-first",
                "drain"
              ]
            },
            {
              "id": "system-assume-cause",
              "text": "สรุปว่าระบบเป็นสาเหตุของการเปลี่ยนแปลงแล้ว",
              "learningPoint": "การมีข้อมูลระบบไม่ยืนยันความสัมพันธ์เชิงสาเหตุ",
              "supportingEvidence": "ทราบว่ามีบันทึกตรวจระบบ แต่รายละเอียดเวลาและสิ่งที่เห็นยังไม่ครบ",
              "missingInformation": "ยังไม่มีข้อมูลเปรียบเทียบผู้ป่วยร่วมและหลักฐานยืนยันสาเหตุ",
              "alternativeReasoning": "อาจมีคำอธิบายอื่นที่ข้อมูลปัจจุบันยังไม่สามารถแยกได้",
              "communicationPoint": "ส่งต่อข้อสังเกตและความไม่แน่นอน ไม่ระบุสาเหตุเสมือนยืนยันแล้ว",
              "reviewTopicIds": [
                "missing",
                "drain"
              ],
              "explanation": {
                "support": "ทราบว่ามีบันทึกตรวจระบบ แต่รายละเอียดเวลาและสิ่งที่เห็นยังไม่ครบ",
                "missing": "ยังไม่มีข้อมูลเปรียบเทียบผู้ป่วยร่วมและหลักฐานยืนยันสาเหตุ",
                "alternative": "อาจมีคำอธิบายอื่นที่ข้อมูลปัจจุบันยังไม่สามารถแยกได้",
                "communication": "ส่งต่อข้อสังเกตและความไม่แน่นอน ไม่ระบุสาเหตุเสมือนยืนยันแล้ว"
              },
              "learningEvidence": [
                {
                  "criterion": "missing",
                  "indicator": "review"
                },
                {
                  "criterion": "patient-first",
                  "indicator": "partial"
                }
              ],
              "reviewTopics": [
                "missing",
                "drain"
              ]
            }
          ],
          "relatedReviewTopics": [
            "patient-first",
            "drain",
            "missing"
          ],
          "learningEvidenceCriteria": [
            "patient-first",
            "missing"
          ]
        },
        {
          "id": "system-uncertainty",
          "title": "พิจารณาความไม่แน่นอน (Consider Uncertainty)",
          "observations": [
            "มีข้อสังเกตว่าการหายใจเปลี่ยนจาก baseline",
            "ยังไม่มีข้อมูลเพียงพอที่จะยืนยันสาเหตุ",
            "ยังต้องยืนยันข้อมูลจากทีมและเวชระเบียนตามบริบท"
          ],
          "knownInformation": [
            "มีการเปลี่ยนแปลงที่รายงานไว้",
            "ข้อมูลระบบและข้อมูลผู้ป่วยร่วมยังไม่ครบจากขั้นก่อน",
            "ยังไม่ยืนยันสาเหตุ"
          ],
          "missingInformation": [
            "ผลประเมินร่วมและข้อมูลที่ต้องยืนยันจากทีมและเวชระเบียน",
            "หลักฐานเพียงพอสำหรับข้อสรุปสาเหตุ"
          ],
          "question": "วิธีคิดใดไม่ยึดติดกับคำอธิบายเดียวและไม่ทำให้ชะลอการสื่อสาร?",
          "choices": [
            {
              "id": "system-state-uncertainty",
              "text": "ระบุการเปลี่ยนแปลง แยกข้อเท็จจริงจากข้อสันนิษฐาน และระบุข้อมูลที่ต้องยืนยัน",
              "learningPoint": "ความไม่แน่นอนต้องถูกสื่อสารพร้อมข้อสังเกต ไม่ซ่อนด้วยข้อสรุปก่อนเวลา",
              "supportingEvidence": "ข้อมูลยืนยันการหายใจเปลี่ยน แต่ยังไม่เพียงพอยืนยันสาเหตุ",
              "missingInformation": "ยังต้องยืนยันผลประเมินร่วมและข้อมูลจากทีมกับเวชระเบียน",
              "alternativeReasoning": "ควรเปิดรับคำอธิบายอื่นโดยไม่ถือว่าระบบระบายเป็นสาเหตุเดียว",
              "communicationPoint": "หากเป็นสถานการณ์จริงให้แจ้งทีมผู้รับผิดชอบทันทีตามแนวทางหน่วยงาน ไม่รอข้อมูลครบหรือใช้แบบฝึกแทนการรายงาน",
              "reviewTopicIds": [
                "missing",
                "communication"
              ],
              "explanation": {
                "support": "ข้อมูลยืนยันการหายใจเปลี่ยน แต่ยังไม่เพียงพอยืนยันสาเหตุ",
                "missing": "ยังต้องยืนยันผลประเมินร่วมและข้อมูลจากทีมกับเวชระเบียน",
                "alternative": "ควรเปิดรับคำอธิบายอื่นโดยไม่ถือว่าระบบระบายเป็นสาเหตุเดียว",
                "communication": "หากเป็นสถานการณ์จริงให้แจ้งทีมผู้รับผิดชอบทันทีตามแนวทางหน่วยงาน ไม่รอข้อมูลครบหรือใช้แบบฝึกแทนการรายงาน"
              },
              "learningEvidence": [
                {
                  "criterion": "missing",
                  "indicator": "demonstrated"
                },
                {
                  "criterion": "prioritization",
                  "indicator": "demonstrated"
                }
              ],
              "reviewTopics": [
                "missing",
                "communication"
              ]
            },
            {
              "id": "system-anchor-device",
              "text": "สรุปว่าการเปลี่ยนแปลงเกิดจากระบบระบายโดยไม่มีหลักฐานเพียงพอ",
              "learningPoint": "หลีกเลี่ยงการสรุปก่อนมีข้อมูลสนับสนุน (Premature conclusion)",
              "supportingEvidence": "ขั้นนี้ระบุชัดว่ายังไม่มีข้อมูลเพียงพอจะยืนยันสาเหตุ",
              "missingInformation": "ผลประเมินร่วมและหลักฐานสาเหตุยังขาด",
              "alternativeReasoning": "คำอธิบายอื่นยังไม่ถูกแยกจากข้อมูลที่มี",
              "communicationPoint": "สื่อสารว่าเป็นข้อสันนิษฐานที่ยังไม่ยืนยัน พร้อมข้อสังเกตจริง",
              "reviewTopicIds": [
                "missing",
                "patient-first"
              ],
              "explanation": {
                "support": "ขั้นนี้ระบุชัดว่ายังไม่มีข้อมูลเพียงพอจะยืนยันสาเหตุ",
                "missing": "ผลประเมินร่วมและหลักฐานสาเหตุยังขาด",
                "alternative": "คำอธิบายอื่นยังไม่ถูกแยกจากข้อมูลที่มี",
                "communication": "สื่อสารว่าเป็นข้อสันนิษฐานที่ยังไม่ยืนยัน พร้อมข้อสังเกตจริง"
              },
              "learningEvidence": [
                {
                  "criterion": "missing",
                  "indicator": "review"
                },
                {
                  "criterion": "prioritization",
                  "indicator": "partial"
                }
              ],
              "reviewTopics": [
                "missing",
                "patient-first"
              ]
            },
            {
              "id": "system-wait-for-all",
              "text": "รอให้ข้อมูลครบทั้งหมดก่อนแจ้งทีมแม้มีการเปลี่ยนแปลงที่น่ากังวล",
              "learningPoint": "การระบุข้อมูลที่ขาดไม่ควรกลายเป็นเหตุชะลอการรายงาน",
              "supportingEvidence": "มีรายงานการเปลี่ยนแปลงจาก baseline แล้ว แม้สาเหตุยังไม่ทราบ",
              "missingInformation": "ข้อมูลเพิ่มเติมยังจำเป็น แต่ไม่ได้ทำให้ข้อสังเกตที่มีหายไป",
              "alternativeReasoning": "การยืนยันข้อมูลและการสื่อสารความกังวลไม่จำเป็นต้องรอเป็นลำดับจนข้อมูลครบ",
              "communicationPoint": "ในสถานการณ์จริงแจ้งทีมผู้รับผิดชอบทันทีตามแนวทางหน่วยงาน ระบุทั้งสิ่งที่ทราบและยังไม่ทราบ",
              "reviewTopicIds": [
                "communication",
                "baseline"
              ],
              "explanation": {
                "support": "มีรายงานการเปลี่ยนแปลงจาก baseline แล้ว แม้สาเหตุยังไม่ทราบ",
                "missing": "ข้อมูลเพิ่มเติมยังจำเป็น แต่ไม่ได้ทำให้ข้อสังเกตที่มีหายไป",
                "alternative": "การยืนยันข้อมูลและการสื่อสารความกังวลไม่จำเป็นต้องรอเป็นลำดับจนข้อมูลครบ",
                "communication": "ในสถานการณ์จริงแจ้งทีมผู้รับผิดชอบทันทีตามแนวทางหน่วยงาน ระบุทั้งสิ่งที่ทราบและยังไม่ทราบ"
              },
              "learningEvidence": [
                {
                  "criterion": "prioritization",
                  "indicator": "review"
                },
                {
                  "criterion": "missing",
                  "indicator": "partial"
                }
              ],
              "reviewTopics": [
                "communication",
                "baseline"
              ]
            }
          ],
          "relatedReviewTopics": [
            "missing",
            "communication",
            "patient-first",
            "baseline"
          ],
          "learningEvidenceCriteria": [
            "missing",
            "prioritization"
          ]
        },
        {
          "id": "system-communicate",
          "title": "สื่อสารและรายงานต่อทีม (Communicate and Escalate)",
          "observations": [
            "ใช้ข้อมูลที่เปิดเผยแล้ว: มีรายงาน work of breathing เพิ่มจาก baseline",
            "มีบันทึกตรวจระบบที่รายละเอียดเวลาและข้อสังเกตไม่ครบ และไม่มีผลประเมินผู้ป่วยร่วมในช่วงเดียวกัน",
            "ยังไม่ยืนยันสาเหตุและยังต้องยืนยันข้อมูลกับทีมและเวชระเบียน",
            "ฝึกจัดข้อมูล S: สิ่งที่เปลี่ยน • B: ประวัติและข้อมูลก่อนหน้า • A: ข้อสังเกตและความไม่แน่นอน • R: สิ่งที่ขอทีมทบทวนหรือยืนยัน"
          ],
          "knownInformation": [
            "ทราบการเปลี่ยนแปลงที่รายงานและข้อจำกัดของบันทึก",
            "ไม่ให้ข้อมูลยืนยันสาเหตุ การรักษา หรือผลลัพธ์ผู้ป่วย"
          ],
          "missingInformation": [
            "ผลประเมินร่วมและรายละเอียดที่ยังต้องยืนยัน",
            "ข้อมูลประวัติส่วนที่กรณีไม่ได้ให้ และแผนจากทีมผู้รับผิดชอบ"
          ],
          "question": "รูปแบบใดสื่อสารการเปลี่ยนแปลงและความไม่แน่นอนด้วย SBAR ได้ชัดเจน?",
          "choices": [
            {
              "id": "system-sbar-request",
              "text": "สื่อสารการเปลี่ยนแปลง ข้อมูลที่มี ข้อมูลที่ขาด และสิ่งที่ต้องการจากทีมอย่างชัดเจน",
              "learningPoint": "SBAR แยกข้อสังเกต ประวัติ ความไม่แน่นอน และคำขอจากทีม",
              "supportingEvidence": "มีรายงานการหายใจเปลี่ยน ข้อมูลระบบไม่ครบ และยังไม่ยืนยันสาเหตุ",
              "missingInformation": "ผลประเมินร่วม รายละเอียดก่อนหน้า และแผนจากทีมยังต้องยืนยัน ไม่เติมประวัติขึ้นเอง",
              "alternativeReasoning": "การสื่อสารอย่างมีโครงสร้างไม่ใช่การยืนยันสาเหตุหรือสั่งการรักษา",
              "communicationPoint": "S ระบุการเปลี่ยน • B ใช้ข้อมูลก่อนหน้าที่มีและบอกส่วนที่ขาด • A ระบุข้อสังเกตและความไม่แน่นอน • R ขอทีมทบทวนและยืนยันตามแนวทางหน่วยงาน",
              "reviewTopicIds": [
                "communication"
              ],
              "explanation": {
                "support": "มีรายงานการหายใจเปลี่ยน ข้อมูลระบบไม่ครบ และยังไม่ยืนยันสาเหตุ",
                "missing": "ผลประเมินร่วม รายละเอียดก่อนหน้า และแผนจากทีมยังต้องยืนยัน ไม่เติมประวัติขึ้นเอง",
                "alternative": "การสื่อสารอย่างมีโครงสร้างไม่ใช่การยืนยันสาเหตุหรือสั่งการรักษา",
                "communication": "S ระบุการเปลี่ยน • B ใช้ข้อมูลก่อนหน้าที่มีและบอกส่วนที่ขาด • A ระบุข้อสังเกตและความไม่แน่นอน • R ขอทีมทบทวนและยืนยันตามแนวทางหน่วยงาน"
              },
              "learningEvidence": [
                {
                  "criterion": "communication",
                  "indicator": "demonstrated"
                },
                {
                  "criterion": "missing",
                  "indicator": "demonstrated"
                }
              ],
              "reviewTopics": [
                "communication"
              ]
            },
            {
              "id": "system-device-only-report",
              "text": "รายงานเฉพาะข้อมูลอุปกรณ์โดยไม่กล่าวถึงผู้ป่วย",
              "learningPoint": "ข้อมูลอุปกรณ์เพียงกลุ่มเดียวไม่สื่อสารสถานการณ์ผู้ป่วยครบ",
              "supportingEvidence": "มีรายงานการหายใจเปลี่ยนจาก baseline ร่วมกับบันทึกระบบที่ไม่ครบ",
              "missingInformation": "ยังขาดการสื่อสารการเปลี่ยนของผู้ป่วยและคำขอจากทีม",
              "alternativeReasoning": "บันทึกระบบไม่ใช่ตัวแทนของผลประเมินผู้ป่วย",
              "communicationPoint": "เพิ่มสิ่งที่เปลี่ยนจาก baseline ข้อจำกัดข้อมูล และสิ่งที่ขอทีมยืนยัน",
              "reviewTopicIds": [
                "communication",
                "patient-first"
              ],
              "explanation": {
                "support": "มีรายงานการหายใจเปลี่ยนจาก baseline ร่วมกับบันทึกระบบที่ไม่ครบ",
                "missing": "ยังขาดการสื่อสารการเปลี่ยนของผู้ป่วยและคำขอจากทีม",
                "alternative": "บันทึกระบบไม่ใช่ตัวแทนของผลประเมินผู้ป่วย",
                "communication": "เพิ่มสิ่งที่เปลี่ยนจาก baseline ข้อจำกัดข้อมูล และสิ่งที่ขอทีมยืนยัน"
              },
              "learningEvidence": [
                {
                  "criterion": "communication",
                  "indicator": "partial"
                },
                {
                  "criterion": "patient-first",
                  "indicator": "review"
                }
              ],
              "reviewTopics": [
                "communication",
                "patient-first"
              ]
            },
            {
              "id": "system-unsupported-treatment",
              "text": "สรุปสาเหตุและเสนอการรักษาโดยไม่มีข้อมูลยืนยัน",
              "learningPoint": "แบบฝึกนี้ฝึกสื่อสารข้อสังเกตและข้อจำกัด ไม่กำหนดการรักษา",
              "supportingEvidence": "กรณีระบุว่ายังไม่ยืนยันสาเหตุและไม่มีข้อมูลสำหรับกำหนดการรักษา",
              "missingInformation": "ยังต้องยืนยันผลประเมินร่วม รายละเอียดระบบ และข้อมูลจากทีม",
              "alternativeReasoning": "อย่าแทนความไม่แน่นอนด้วยข้อสรุปหรือการรักษาที่กรณีไม่ได้ให้",
              "communicationPoint": "แจ้งสิ่งที่ทราบ สิ่งที่ยังขาด และคำขอทีมทบทวน โดยไม่เสนอคำสั่งรักษาที่ไม่มีข้อมูลยืนยัน",
              "reviewTopicIds": [
                "communication",
                "missing"
              ],
              "explanation": {
                "support": "กรณีระบุว่ายังไม่ยืนยันสาเหตุและไม่มีข้อมูลสำหรับกำหนดการรักษา",
                "missing": "ยังต้องยืนยันผลประเมินร่วม รายละเอียดระบบ และข้อมูลจากทีม",
                "alternative": "อย่าแทนความไม่แน่นอนด้วยข้อสรุปหรือการรักษาที่กรณีไม่ได้ให้",
                "communication": "แจ้งสิ่งที่ทราบ สิ่งที่ยังขาด และคำขอทีมทบทวน โดยไม่เสนอคำสั่งรักษาที่ไม่มีข้อมูลยืนยัน"
              },
              "learningEvidence": [
                {
                  "criterion": "communication",
                  "indicator": "review"
                },
                {
                  "criterion": "missing",
                  "indicator": "review"
                }
              ],
              "reviewTopics": [
                "communication",
                "missing"
              ]
            }
          ],
          "relatedReviewTopics": [
            "communication",
            "patient-first",
            "missing"
          ],
          "learningEvidenceCriteria": [
            "communication",
            "missing",
            "patient-first"
          ]
        }
      ],
      "debrief": {
        "summary": "กรณีนี้ฝึกเปรียบเทียบ baseline แยกข้อมูลผู้ป่วยและอุปกรณ์ ระบุความไม่แน่นอน และสื่อสารกับทีม ไม่มีผลการรักษาจากตัวเลือก ไม่มีคะแนนผ่าน–ตกหรือการรับรองความพร้อมปฏิบัติงาน",
        "learningPoints": [
          "การเปลี่ยนแปลงจาก baseline ต้องเชื่อมกับเวลาและข้อมูลประเมินปัจจุบัน",
          "แยกข้อมูลผู้ป่วย (Patient Data) ออกจากข้อมูลระบบ (Device Data) ก่อนเชื่อมบริบท",
          "ระบุข้อมูลที่ขาด (Missing Information) และสิ่งที่ต้องยืนยันโดยไม่เติมข้อมูลขึ้นเอง",
          "หลีกเลี่ยงการสรุปก่อนข้อมูลเพียงพอ (Premature conclusion) ไม่ใช้การไม่มี tidaling หรือ bubbling เพียงอย่างเดียวสรุปการอุดตัน",
          "ในสถานการณ์จริงที่ผู้ป่วยเปลี่ยนแปลง ให้แจ้งทีมผู้รับผิดชอบทันทีตามแนวทางหน่วยงาน ไม่ใช้แบบฝึกแทนการรายงาน"
        ],
        "reflection": [
          "อะไรเป็นข้อสังเกต และอะไรยังเป็นข้อสันนิษฐาน?",
          "ข้อมูลผู้ป่วยและระบบอยู่ในช่วงเวลาที่เปรียบเทียบกันได้หรือไม่?",
          "คุณจะระบุข้อมูลที่ยังขาดและคำขอทีมทบทวนใน SBAR อย่างไร?"
        ]
      }
    },
    {
      "id": "case-clinical-deterioration",
      "contentVersion": "1.0",
      "title": "การรับรู้ภาวะเปลี่ยนแปลงและการยกระดับการรายงาน",
      "englishTitle": "Clinical Deterioration and Escalation",
      "fictional": true,
      "reviewStatus": "pending-specialist-review",
      "draftLabel": "DRAFT — PENDING SPECIALIST REVIEW",
      "intro": "กรณีสมมติของทารกคลอดก่อนกำหนดที่มีสายระบายทรวงอก (Chest drain) ใช้ฝึกการรับรู้การเปลี่ยนแปลง การจัดลำดับ และการสื่อสาร ไม่ใช่ระบบวินิจฉัย ระบบช่วยตัดสินใจทางคลินิก (Clinical Decision Support) หรือเครื่องมือแนะนำการรักษา ทุกขั้นเป็นข้อมูลสมมติที่กำหนดไว้ล่วงหน้า ไม่ใช่ผลจากการเลือกคำตอบ หากเป็นเหตุการณ์จริงที่มีความกังวลต่อความปลอดภัย ให้หยุดใช้แบบฝึกและแจ้งทีมผู้รับผิดชอบทันทีตามแนวทางการยกระดับการรายงาน (Escalation protocol) ของหน่วยงาน ไม่ใช้แทนแนวทางฉุกเฉินของโรงพยาบาล",
      "objectives": [
        "รับรู้การเปลี่ยนแปลงจากข้อมูลตั้งต้น (Baseline)",
        "จัดลำดับความสำคัญโดยคำนึงถึงความปลอดภัยของผู้ป่วย",
        "สื่อสารและยกระดับการรายงานตามแนวทางหน่วยงาน (Escalation)",
        "ทวนข้อมูลและยืนยันความเข้าใจร่วมกัน (Closed-loop communication)",
        "จัดข้อมูลแบบ SBAR โดยไม่กล่าวเกินหลักฐาน",
        "สะท้อนคิดต่อความไม่แน่นอน (Uncertainty)"
      ],
      "metadata": {
        "reviewerName": null,
        "reviewerRole": null,
        "reviewedAt": null,
        "nextReviewAt": null,
        "institutionalApproval": null,
        "localApprovalRequired": [
          "ขอบเขตและบทบาทผู้เรียน",
          "แบบประเมินและเป้าหมายเฉพาะราย",
          "ช่องทาง ผู้รับผิดชอบ และเกณฑ์รายงานของหน่วยงาน"
        ],
        "sources": [
          {
            "title": "บทที่ 6: การประเมินและแปลผลทางคลินิก",
            "module": 5,
            "sections": [
              0,
              1,
              2,
              3
            ]
          },
          {
            "title": "บทที่ 9: การสื่อสารในทีม",
            "module": 8,
            "sections": [
              3
            ]
          },
          {
            "title": "AHRQ TeamSTEPPS — SBAR: กรอบการสื่อสารทั่วไป ไม่ใช่แนวทางรักษาทารก",
            "url": "https://www.ahrq.gov/teamstepps-program/curriculum/communication/tools/sbar.html",
            "accessed": "2026-11-05"
          },
          {
            "title": "Neonatal Network South East — Care of Chest Drains §4.6: ใช้กรอบการสังเกต ไม่ใช้ค่าตั้งหรือขั้นตอนเฉพาะหน่วยงาน",
            "url": "https://neonatalnetworkssoutheast.nhs.uk/professionals/guidelines/tvw-guidelines/care-of-chest-drains/",
            "accessed": "2026-11-05"
          }
        ],
        "approvalDate": null
      },
      "stages": [
        {
          "id": "deterioration-recognition",
          "title": "รับรู้การเปลี่ยนแปลง (Recognize Deterioration)",
          "observations": [
            "ทารกคลอดก่อนกำหนดสมมติที่มี chest drain มีข้อสังเกตว่าการหายใจเปลี่ยนจาก baseline",
            "มีประวัติทางคลินิกและข้อมูลระบบระบายจากการส่งเวร แต่กรณีไม่ได้ให้รายละเอียดครบ",
            "ยังไม่มีผลประเมินผู้ป่วยครบทุกด้านในช่วงเวลาเดียวกัน และยังไม่สามารถยืนยันสาเหตุ"
          ],
          "knownInformation": [
            "มีรายงานการหายใจเปลี่ยนจาก baseline",
            "มีข้อมูลส่งเวรบางส่วนเกี่ยวกับประวัติและระบบระบาย",
            "ยังไม่ยืนยันสาเหตุ"
          ],
          "missingInformation": [
            "ผลประเมินผู้ป่วยร่วมในช่วงเวลาเดียวกัน",
            "รายละเอียด baseline ประวัติ และข้อสังเกตจากระบบที่ต้องยืนยัน",
            "ข้อมูลเพียงพอสำหรับข้อสรุปสาเหตุ"
          ],
          "question": "ข้อมูลใดควรได้รับความสำคัญในการรับรู้การเปลี่ยนแปลงของผู้ป่วย?",
          "choices": [
            {
              "id": "deterioration-connect-baseline",
              "text": "เชื่อมโยงการเปลี่ยนแปลงของผู้ป่วยกับ baseline และข้อมูลประเมินที่มี",
              "learningPoint": "การรับรู้เริ่มจากสิ่งที่เปลี่ยนและขอบเขตของข้อมูลที่มี",
              "supportingEvidence": "ขั้นนี้ระบุว่าการหายใจเปลี่ยนจาก baseline แต่ผลประเมินร่วมยังไม่ครบ",
              "missingInformation": "ต้องยืนยันผลประเมินช่วงเดียวกัน รายละเอียด baseline และบริบทจากการส่งเวร",
              "alternativeReasoning": "การรับรู้การเปลี่ยนแปลงยังไม่ยืนยันสาเหตุ และข้อมูลระบบต้องพิจารณาร่วมกับผู้ป่วย",
              "communicationPoint": "หากเป็นเหตุการณ์จริงที่กังวลต่อความปลอดภัย ให้แจ้งทีมผู้รับผิดชอบทันทีตามแนวทางหน่วยงาน พร้อมระบุข้อสังเกตและสิ่งที่ยังขาด ไม่รอทำแบบฝึกต่อ",
              "reviewTopicIds": [
                "baseline",
                "patient-first"
              ],
              "explanation": {
                "support": "ขั้นนี้ระบุว่าการหายใจเปลี่ยนจาก baseline แต่ผลประเมินร่วมยังไม่ครบ",
                "missing": "ต้องยืนยันผลประเมินช่วงเดียวกัน รายละเอียด baseline และบริบทจากการส่งเวร",
                "alternative": "การรับรู้การเปลี่ยนแปลงยังไม่ยืนยันสาเหตุ และข้อมูลระบบต้องพิจารณาร่วมกับผู้ป่วย",
                "communication": "หากเป็นเหตุการณ์จริงที่กังวลต่อความปลอดภัย ให้แจ้งทีมผู้รับผิดชอบทันทีตามแนวทางหน่วยงาน พร้อมระบุข้อสังเกตและสิ่งที่ยังขาด ไม่รอทำแบบฝึกต่อ"
              },
              "learningEvidence": [
                {
                  "criterion": "baseline",
                  "indicator": "demonstrated"
                },
                {
                  "criterion": "patient-first",
                  "indicator": "demonstrated"
                },
                {
                  "criterion": "missing",
                  "indicator": "demonstrated"
                }
              ],
              "reviewTopics": [
                "baseline",
                "patient-first"
              ]
            },
            {
              "id": "deterioration-device-cause",
              "text": "สรุปสาเหตุจากอุปกรณ์เพียงรายการเดียว",
              "learningPoint": "ข้อมูลอุปกรณ์หนึ่งรายการไม่รองรับข้อสรุปสาเหตุ",
              "supportingEvidence": "ขั้นนี้มีรายงานการหายใจเปลี่ยน และระบุชัดว่ายังไม่ยืนยันสาเหตุ",
              "missingInformation": "ยังไม่มีผลประเมินครบในช่วงเดียวกันหรือหลักฐานเชื่อมโยงสาเหตุ",
              "alternativeReasoning": "ไม่ถือว่าระบบระบายเป็นคำอธิบายเดียว และไม่เติมข้อมูลอุปกรณ์ที่กรณียังไม่ได้ให้",
              "communicationPoint": "ส่งต่อสิ่งที่สังเกตและความไม่แน่นอน แทนการรายงานข้อสันนิษฐานเสมือนข้อเท็จจริง",
              "reviewTopicIds": [
                "missing",
                "drain"
              ],
              "explanation": {
                "support": "ขั้นนี้มีรายงานการหายใจเปลี่ยน และระบุชัดว่ายังไม่ยืนยันสาเหตุ",
                "missing": "ยังไม่มีผลประเมินครบในช่วงเดียวกันหรือหลักฐานเชื่อมโยงสาเหตุ",
                "alternative": "ไม่ถือว่าระบบระบายเป็นคำอธิบายเดียว และไม่เติมข้อมูลอุปกรณ์ที่กรณียังไม่ได้ให้",
                "communication": "ส่งต่อสิ่งที่สังเกตและความไม่แน่นอน แทนการรายงานข้อสันนิษฐานเสมือนข้อเท็จจริง"
              },
              "learningEvidence": [
                {
                  "criterion": "patient-first",
                  "indicator": "review"
                },
                {
                  "criterion": "missing",
                  "indicator": "review"
                }
              ],
              "reviewTopics": [
                "missing",
                "drain"
              ]
            },
            {
              "id": "deterioration-handover-only",
              "text": "ใช้ข้อมูลการส่งเวรเดิมแทนการประเมินสถานการณ์ปัจจุบัน",
              "learningPoint": "ข้อมูลก่อนหน้าเป็นฐานเปรียบเทียบ ไม่ใช่ข้อมูลประเมินปัจจุบันทั้งหมด",
              "supportingEvidence": "มีรายงานการหายใจเปลี่ยนจาก baseline และผลประเมินร่วมยังไม่ครบ",
              "missingInformation": "ยังต้องยืนยันข้อมูลผู้ป่วยปัจจุบันในช่วงเวลาเดียวกัน",
              "alternativeReasoning": "ข้อมูลส่งเวรอาจมีประโยชน์ แต่ไม่ลบข้อสังเกตที่เปลี่ยนแปลงล่าสุด",
              "communicationPoint": "แยกข้อมูลก่อนหน้าออกจากข้อสังเกตปัจจุบัน และบอกทีมถึงข้อจำกัดข้อมูล",
              "reviewTopicIds": [
                "baseline",
                "patient-first"
              ],
              "explanation": {
                "support": "มีรายงานการหายใจเปลี่ยนจาก baseline และผลประเมินร่วมยังไม่ครบ",
                "missing": "ยังต้องยืนยันข้อมูลผู้ป่วยปัจจุบันในช่วงเวลาเดียวกัน",
                "alternative": "ข้อมูลส่งเวรอาจมีประโยชน์ แต่ไม่ลบข้อสังเกตที่เปลี่ยนแปลงล่าสุด",
                "communication": "แยกข้อมูลก่อนหน้าออกจากข้อสังเกตปัจจุบัน และบอกทีมถึงข้อจำกัดข้อมูล"
              },
              "learningEvidence": [
                {
                  "criterion": "baseline",
                  "indicator": "review"
                },
                {
                  "criterion": "missing",
                  "indicator": "partial"
                }
              ],
              "reviewTopics": [
                "baseline",
                "patient-first"
              ]
            }
          ],
          "relatedReviewTopics": [
            "baseline",
            "patient-first",
            "missing",
            "drain"
          ],
          "learningEvidenceCriteria": [
            "baseline",
            "patient-first",
            "missing"
          ]
        },
        {
          "id": "deterioration-escalation",
          "title": "จัดลำดับและยกระดับการรายงาน (Prioritize and Escalate)",
          "observations": [
            "เปิดเผยข้อมูลสมมติเพิ่ม: ข้อสังเกตน่ากังวลมากขึ้นเมื่อเทียบกับข้อมูลตั้งต้น",
            "ข้อมูลบางส่วนยังต้องได้รับการยืนยัน และยังไม่มีข้อสรุปสาเหตุ",
            "สถานการณ์นี้ใช้ฝึกพิจารณาความปลอดภัยและการรายงานตามแนวทางหน่วยงาน ไม่กำหนดเกณฑ์ตัวเลข"
          ],
          "knownInformation": [
            "ข้อสังเกตเปลี่ยนและน่ากังวลขึ้นจาก baseline",
            "ข้อมูลไม่ครบและยังไม่ยืนยันสาเหตุ"
          ],
          "missingInformation": [
            "รายละเอียดผลประเมินร่วมและข้อมูลที่ยังต้องยืนยันกับทีม",
            "ข้อสรุปสาเหตุและข้อมูลที่จำเป็นตามบริบท"
          ],
          "question": "แนวทางใดสะท้อนการจัดลำดับความสำคัญและการยกระดับการรายงานได้เหมาะสม?",
          "choices": [
            {
              "id": "deterioration-notify-team",
              "text": "แจ้งทีมผู้รับผิดชอบทันทีตามแนวทาง escalation ของหน่วยงาน พร้อมสื่อสารข้อมูลที่มีและข้อมูลที่ยังขาด",
              "learningPoint": "ความไม่ครบของข้อมูลไม่ควรเป็นเหตุชะลอการรายงานความกังวล",
              "supportingEvidence": "ขั้นนี้ระบุว่าข้อสังเกตน่ากังวลมากขึ้นจากข้อมูลตั้งต้น",
              "missingInformation": "ข้อมูลบางส่วนและสาเหตุยังต้องยืนยัน",
              "alternativeReasoning": "การรายงานความกังวลไม่เท่ากับยืนยันสาเหตุหรือกำหนดการรักษา",
              "communicationPoint": "สื่อสารการเปลี่ยนแปลง ข้อมูลที่มีและที่ขาดต่อทีมผู้รับผิดชอบทันทีตาม escalation protocol ของหน่วยงาน ในเหตุการณ์จริงไม่ใช้แบบฝึกแทนการรายงาน",
              "reviewTopicIds": [
                "communication",
                "baseline"
              ],
              "explanation": {
                "support": "ขั้นนี้ระบุว่าข้อสังเกตน่ากังวลมากขึ้นจากข้อมูลตั้งต้น",
                "missing": "ข้อมูลบางส่วนและสาเหตุยังต้องยืนยัน",
                "alternative": "การรายงานความกังวลไม่เท่ากับยืนยันสาเหตุหรือกำหนดการรักษา",
                "communication": "สื่อสารการเปลี่ยนแปลง ข้อมูลที่มีและที่ขาดต่อทีมผู้รับผิดชอบทันทีตาม escalation protocol ของหน่วยงาน ในเหตุการณ์จริงไม่ใช้แบบฝึกแทนการรายงาน"
              },
              "learningEvidence": [
                {
                  "criterion": "prioritization",
                  "indicator": "demonstrated"
                },
                {
                  "criterion": "communication",
                  "indicator": "demonstrated"
                }
              ],
              "reviewTopics": [
                "communication",
                "baseline"
              ]
            },
            {
              "id": "deterioration-wait-complete",
              "text": "รอให้รวบรวมข้อมูลครบทุกส่วนก่อนจึงรายงาน",
              "learningPoint": "การรอข้อมูลครบอาจทำให้การสื่อสารความกังวลล่าช้า",
              "supportingEvidence": "มีข้อสังเกตน่ากังวลมากขึ้นแล้ว แม้สาเหตุยังไม่ทราบ",
              "missingInformation": "ข้อมูลบางส่วนยังขาด แต่ไม่ทำให้ข้อสังเกตที่มีหายไป",
              "alternativeReasoning": "การยืนยันข้อมูลและการแจ้งทีมควรพิจารณาร่วมกัน ไม่ใช้ความไม่แน่นอนเป็นเหตุให้ชะลอ",
              "communicationPoint": "เมื่อมีความกังวลต่อความปลอดภัยในสถานการณ์จริง ให้แจ้งทีมทันทีตามแนวทางหน่วยงาน พร้อมระบุสิ่งที่ยังไม่ทราบ",
              "reviewTopicIds": [
                "communication",
                "missing"
              ],
              "explanation": {
                "support": "มีข้อสังเกตน่ากังวลมากขึ้นแล้ว แม้สาเหตุยังไม่ทราบ",
                "missing": "ข้อมูลบางส่วนยังขาด แต่ไม่ทำให้ข้อสังเกตที่มีหายไป",
                "alternative": "การยืนยันข้อมูลและการแจ้งทีมควรพิจารณาร่วมกัน ไม่ใช้ความไม่แน่นอนเป็นเหตุให้ชะลอ",
                "communication": "เมื่อมีความกังวลต่อความปลอดภัยในสถานการณ์จริง ให้แจ้งทีมทันทีตามแนวทางหน่วยงาน พร้อมระบุสิ่งที่ยังไม่ทราบ"
              },
              "learningEvidence": [
                {
                  "criterion": "prioritization",
                  "indicator": "review"
                },
                {
                  "criterion": "missing",
                  "indicator": "partial"
                }
              ],
              "reviewTopics": [
                "communication",
                "missing"
              ]
            },
            {
              "id": "deterioration-device-before-report",
              "text": "ตรวจสอบอุปกรณ์ต่อไปโดยยังไม่แจ้งทีม",
              "learningPoint": "การมุ่งข้อมูลอุปกรณ์ไม่ควรบดบังความเปลี่ยนแปลงของผู้ป่วยและการรายงาน",
              "supportingEvidence": "มีข้อสังเกตผู้ป่วยที่น่ากังวลมากขึ้น และยังไม่มีข้อสรุปสาเหตุ",
              "missingInformation": "ผลประเมินร่วมและรายละเอียดระบบยังไม่ครบ",
              "alternativeReasoning": "อุปกรณ์เป็นเพียงส่วนหนึ่งของบริบท ไม่ใช่เหตุให้เลื่อนการสื่อสารความกังวล",
              "communicationPoint": "แจ้งทีมผู้รับผิดชอบทันทีตามแนวทางหน่วยงานเมื่อกังวลต่อความปลอดภัย โดยสื่อสารข้อมูลผู้ป่วยร่วมกับข้อจำกัดของข้อมูลระบบ",
              "reviewTopicIds": [
                "patient-first",
                "communication"
              ],
              "explanation": {
                "support": "มีข้อสังเกตผู้ป่วยที่น่ากังวลมากขึ้น และยังไม่มีข้อสรุปสาเหตุ",
                "missing": "ผลประเมินร่วมและรายละเอียดระบบยังไม่ครบ",
                "alternative": "อุปกรณ์เป็นเพียงส่วนหนึ่งของบริบท ไม่ใช่เหตุให้เลื่อนการสื่อสารความกังวล",
                "communication": "แจ้งทีมผู้รับผิดชอบทันทีตามแนวทางหน่วยงานเมื่อกังวลต่อความปลอดภัย โดยสื่อสารข้อมูลผู้ป่วยร่วมกับข้อจำกัดของข้อมูลระบบ"
              },
              "learningEvidence": [
                {
                  "criterion": "patient-first",
                  "indicator": "review"
                },
                {
                  "criterion": "prioritization",
                  "indicator": "review"
                }
              ],
              "reviewTopics": [
                "patient-first",
                "communication"
              ]
            }
          ],
          "relatedReviewTopics": [
            "communication",
            "baseline",
            "missing",
            "patient-first"
          ],
          "learningEvidenceCriteria": [
            "prioritization",
            "communication",
            "missing",
            "patient-first"
          ]
        },
        {
          "id": "deterioration-closed-loop",
          "title": "ยืนยันความเข้าใจร่วมกัน (Closed-loop Communication)",
          "observations": [
            "ข้อมูลสมมติที่กำหนดไว้สำหรับขั้นนี้: ผู้เรียนในเรื่องเล่าได้รายงานข้อมูลให้ทีมผู้รับผิดชอบแล้ว",
            "ทีมขอให้ทวนข้อมูลสำคัญและยืนยันความเข้าใจ",
            "มีข้อมูลบางรายการที่ยังต้องตรวจสอบร่วมกัน",
            "เรื่องเล่าขั้นนี้เหมือนกันทุกตัวเลือก ไม่ใช่ผลจากคำตอบขั้นก่อน และไม่มีคำสั่งรักษาหรือจัดการอุปกรณ์"
          ],
          "knownInformation": [
            "ในเรื่องเล่ามีการรายงานให้ทีมแล้ว",
            "ทีมขอทวนข้อมูลและมีรายการที่ต้องตรวจสอบร่วมกัน"
          ],
          "missingInformation": [
            "การยืนยันว่าข้อมูลสำคัญใดเข้าใจตรงกันแล้ว",
            "รายละเอียดของข้อมูลที่ยังต้องตรวจสอบร่วมกันตามบริบท"
          ],
          "question": "การสื่อสารแบบ Closed-loop ที่เหมาะสมควรเป็นอย่างไร?",
          "choices": [
            {
              "id": "deterioration-confirm-loop",
              "text": "ทวนประเด็นสำคัญ สิ่งที่ทีมรับทราบ สิ่งที่ต้องดำเนินการตามบทบาท และยืนยันความเข้าใจร่วมกัน",
              "learningPoint": "การสื่อสารต้องมีการยืนยันความเข้าใจ ไม่หยุดที่การส่งข้อความ",
              "supportingEvidence": "ทีมขอให้ทวนข้อมูลและยืนยันความเข้าใจ และมีรายการที่ยังต้องตรวจสอบร่วมกัน",
              "missingInformation": "ยังต้องยืนยันข้อมูลที่เข้าใจตรงกันและรายการที่ต้องตรวจสอบ โดยไม่เติมคำสั่งขึ้นเอง",
              "alternativeReasoning": "การมีผู้รับข้อความไม่ยืนยันว่าเข้าใจตรงกันทุกประเด็น",
              "communicationPoint": "ทวนข้อสังเกต ข้อจำกัด สิ่งที่ทีมรับทราบ และประเด็นที่จะตรวจสอบตามบทบาท ยืนยันความเข้าใจร่วมกันโดยไม่สร้างคำสั่งรักษา",
              "reviewTopicIds": [
                "communication"
              ],
              "explanation": {
                "support": "ทีมขอให้ทวนข้อมูลและยืนยันความเข้าใจ และมีรายการที่ยังต้องตรวจสอบร่วมกัน",
                "missing": "ยังต้องยืนยันข้อมูลที่เข้าใจตรงกันและรายการที่ต้องตรวจสอบ โดยไม่เติมคำสั่งขึ้นเอง",
                "alternative": "การมีผู้รับข้อความไม่ยืนยันว่าเข้าใจตรงกันทุกประเด็น",
                "communication": "ทวนข้อสังเกต ข้อจำกัด สิ่งที่ทีมรับทราบ และประเด็นที่จะตรวจสอบตามบทบาท ยืนยันความเข้าใจร่วมกันโดยไม่สร้างคำสั่งรักษา"
              },
              "learningEvidence": [
                {
                  "criterion": "communication",
                  "indicator": "demonstrated"
                },
                {
                  "criterion": "missing",
                  "indicator": "demonstrated"
                }
              ],
              "reviewTopics": [
                "communication"
              ]
            },
            {
              "id": "deterioration-message-is-understanding",
              "text": "ถือว่าการส่งข้อความครั้งแรกหมายถึงทีมเข้าใจตรงกันแล้ว",
              "learningPoint": "การส่งข้อความกับการเข้าใจตรงกันเป็นคนละส่วนของการสื่อสาร",
              "supportingEvidence": "ขั้นนี้ทีมขอให้ทวนและยืนยันความเข้าใจอย่างชัดเจน",
              "missingInformation": "ยังไม่มีการยืนยันว่าประเด็นสำคัญใดเข้าใจตรงกัน",
              "alternativeReasoning": "คำขอทวนข้อมูลแสดงว่าต้องตรวจสอบความเข้าใจ ไม่ควรสมมติว่าครบแล้ว",
              "communicationPoint": "ตอบรับคำขอทวนและยืนยันประเด็นสำคัญ รวมข้อมูลที่ยังต้องตรวจสอบร่วมกัน",
              "reviewTopicIds": [
                "communication"
              ],
              "explanation": {
                "support": "ขั้นนี้ทีมขอให้ทวนและยืนยันความเข้าใจอย่างชัดเจน",
                "missing": "ยังไม่มีการยืนยันว่าประเด็นสำคัญใดเข้าใจตรงกัน",
                "alternative": "คำขอทวนข้อมูลแสดงว่าต้องตรวจสอบความเข้าใจ ไม่ควรสมมติว่าครบแล้ว",
                "communication": "ตอบรับคำขอทวนและยืนยันประเด็นสำคัญ รวมข้อมูลที่ยังต้องตรวจสอบร่วมกัน"
              },
              "learningEvidence": [
                {
                  "criterion": "communication",
                  "indicator": "review"
                }
              ],
              "reviewTopics": [
                "communication"
              ]
            },
            {
              "id": "deterioration-unconfirmed-handoff",
              "text": "ส่งต่อข้อมูลโดยไม่ตรวจสอบว่าผู้รับได้รับและเข้าใจข้อมูลหรือไม่",
              "learningPoint": "การส่งต่อที่ไม่ตรวจสอบการรับและความเข้าใจยังไม่ปิดวงจรการสื่อสาร",
              "supportingEvidence": "ทีมขอให้ทวนข้อมูลสำคัญและมีข้อมูลค้างตรวจสอบร่วมกัน",
              "missingInformation": "ยังไม่ทราบว่ารับและเข้าใจตรงกันในประเด็นใด",
              "alternativeReasoning": "ความไม่แน่นอนเรื่องผู้รับข้อมูลต้องแยกจากความไม่แน่นอนของข้อมูลทางคลินิก",
              "communicationPoint": "ยืนยันการรับข้อมูล ทวนประเด็นสำคัญและสิ่งที่ยังต้องตรวจสอบตามระบบการสื่อสารของหน่วยงาน",
              "reviewTopicIds": [
                "communication",
                "missing"
              ],
              "explanation": {
                "support": "ทีมขอให้ทวนข้อมูลสำคัญและมีข้อมูลค้างตรวจสอบร่วมกัน",
                "missing": "ยังไม่ทราบว่ารับและเข้าใจตรงกันในประเด็นใด",
                "alternative": "ความไม่แน่นอนเรื่องผู้รับข้อมูลต้องแยกจากความไม่แน่นอนของข้อมูลทางคลินิก",
                "communication": "ยืนยันการรับข้อมูล ทวนประเด็นสำคัญและสิ่งที่ยังต้องตรวจสอบตามระบบการสื่อสารของหน่วยงาน"
              },
              "learningEvidence": [
                {
                  "criterion": "communication",
                  "indicator": "partial"
                },
                {
                  "criterion": "missing",
                  "indicator": "review"
                }
              ],
              "reviewTopics": [
                "communication",
                "missing"
              ]
            }
          ],
          "relatedReviewTopics": [
            "communication",
            "missing"
          ],
          "learningEvidenceCriteria": [
            "communication",
            "missing"
          ]
        },
        {
          "id": "deterioration-sbar",
          "title": "สรุป SBAR และเตรียมสะท้อนคิด (SBAR and Debrief)",
          "observations": [
            "สรุปข้อมูลที่เปิดเผยแล้ว: ทารกคลอดก่อนกำหนดมี chest drain และการหายใจเปลี่ยนจาก baseline โดยข้อสังเกตน่ากังวลขึ้น",
            "มีข้อมูลประวัติและระบบระบายจากการส่งเวรบางส่วน แต่ไม่มีผลประเมินครบทุกด้านในเวลาเดียวกันและยังไม่ยืนยันสาเหตุ",
            "ในเรื่องเล่าได้รายงานให้ทีมแล้ว ทีมขอทวนข้อมูลและยังมีรายการที่ต้องตรวจสอบร่วมกัน",
            "ข้อมูลที่มีใช้ฝึกสื่อสารและระบุข้อจำกัด ไม่ได้ให้รายละเอียดประวัติที่ขาด คำสั่งรักษา หรือผลลัพธ์ผู้ป่วยเพิ่มเติม"
          ],
          "knownInformation": [
            "มีการเปลี่ยนแปลงจาก baseline และความกังวลที่ต้องสื่อสาร",
            "มีบริบทการส่งเวรและการติดต่อทีมตามเรื่องเล่า",
            "ยังไม่ยืนยันสาเหตุและมีข้อมูลรอตรวจสอบร่วมกัน"
          ],
          "missingInformation": [
            "รายละเอียดประวัติและผลประเมินที่กรณีไม่ได้ให้",
            "ข้อมูลที่ยังต้องยืนยันกับทีมและเวชระเบียน",
            "การยืนยันความเข้าใจครบถ้วนโดยไม่เติมข้อมูลขึ้นเอง"
          ],
          "question": "การสรุปข้อมูลแบบใดมีโครงสร้าง SBAR ครบถ้วนและไม่กล่าวเกินหลักฐาน?",
          "choices": [
            {
              "id": "deterioration-sbar-evidence",
              "text": "S: ระบุการเปลี่ยนแปลง / B: ประวัติและ baseline / A: ข้อสังเกตและข้อมูลที่ยังไม่แน่นอน / R: ระบุสิ่งที่ต้องการให้ทีมทบทวนและยืนยัน",
              "learningPoint": "SBAR จัดข้อมูลที่มีพร้อมระบุข้อจำกัด ไม่ใช่การยืนยันสาเหตุหรือการรักษา",
              "supportingEvidence": "ข้อมูลที่เปิดเผยมีการเปลี่ยนแปลง บริบทก่อนหน้า และรายการที่ยังต้องยืนยันกับทีม",
              "missingInformation": "รายละเอียดประวัติและผลประเมินบางส่วนยังไม่ได้ให้ จึงต้องระบุว่าไม่ทราบ",
              "alternativeReasoning": "ความครบของโครงสร้างไม่เท่ากับความครบของข้อมูล ต้องเปิดเผยความไม่แน่นอน",
              "communicationPoint": "สรุป S/B/A/R จากข้อมูลที่มี ขอทีมทบทวนและยืนยันประเด็นที่ยังขาด พร้อมยืนยันความเข้าใจตามบทบาทและแนวทางหน่วยงาน",
              "reviewTopicIds": [
                "communication",
                "baseline"
              ],
              "explanation": {
                "support": "ข้อมูลที่เปิดเผยมีการเปลี่ยนแปลง บริบทก่อนหน้า และรายการที่ยังต้องยืนยันกับทีม",
                "missing": "รายละเอียดประวัติและผลประเมินบางส่วนยังไม่ได้ให้ จึงต้องระบุว่าไม่ทราบ",
                "alternative": "ความครบของโครงสร้างไม่เท่ากับความครบของข้อมูล ต้องเปิดเผยความไม่แน่นอน",
                "communication": "สรุป S/B/A/R จากข้อมูลที่มี ขอทีมทบทวนและยืนยันประเด็นที่ยังขาด พร้อมยืนยันความเข้าใจตามบทบาทและแนวทางหน่วยงาน"
              },
              "learningEvidence": [
                {
                  "criterion": "communication",
                  "indicator": "demonstrated"
                },
                {
                  "criterion": "missing",
                  "indicator": "demonstrated"
                }
              ],
              "reviewTopics": [
                "communication",
                "baseline"
              ]
            },
            {
              "id": "deterioration-unsupported-treatment",
              "text": "สรุปสาเหตุและการรักษาโดยไม่มีข้อมูลสนับสนุน",
              "learningPoint": "ข้อสรุปที่เกินหลักฐานบดบังความไม่แน่นอนที่ต้องสื่อสาร",
              "supportingEvidence": "เรื่องเล่ายังไม่ยืนยันสาเหตุและไม่ได้ให้ข้อมูลการรักษา",
              "missingInformation": "ผลประเมินและรายละเอียดที่จำเป็นยังต้องยืนยัน",
              "alternativeReasoning": "ไม่เปลี่ยนข้อสันนิษฐานเป็นข้อเท็จจริง และไม่เติมการรักษาที่แบบฝึกไม่ได้ให้",
              "communicationPoint": "รายงานการเปลี่ยนแปลง ข้อมูลที่ทราบและยังขาด พร้อมขอทีมทบทวน แทนการเสนอการรักษาที่ไม่มีข้อมูลยืนยัน",
              "reviewTopicIds": [
                "missing",
                "communication"
              ],
              "explanation": {
                "support": "เรื่องเล่ายังไม่ยืนยันสาเหตุและไม่ได้ให้ข้อมูลการรักษา",
                "missing": "ผลประเมินและรายละเอียดที่จำเป็นยังต้องยืนยัน",
                "alternative": "ไม่เปลี่ยนข้อสันนิษฐานเป็นข้อเท็จจริง และไม่เติมการรักษาที่แบบฝึกไม่ได้ให้",
                "communication": "รายงานการเปลี่ยนแปลง ข้อมูลที่ทราบและยังขาด พร้อมขอทีมทบทวน แทนการเสนอการรักษาที่ไม่มีข้อมูลยืนยัน"
              },
              "learningEvidence": [
                {
                  "criterion": "communication",
                  "indicator": "review"
                },
                {
                  "criterion": "missing",
                  "indicator": "review"
                }
              ],
              "reviewTopics": [
                "missing",
                "communication"
              ]
            },
            {
              "id": "deterioration-history-without-change",
              "text": "รายงานเฉพาะประวัติเดิมโดยไม่กล่าวถึงการเปลี่ยนแปลง",
              "learningPoint": "ประวัติเป็นบริบท แต่ต้องไม่บดบังสถานการณ์ล่าสุดและเหตุผลการรายงาน",
              "supportingEvidence": "มีข้อมูลว่าการหายใจเปลี่ยนและน่ากังวลขึ้นจาก baseline",
              "missingInformation": "ยังขาดการสื่อสารข้อสังเกตล่าสุด ข้อจำกัด และคำขอทบทวนต่อทีม",
              "alternativeReasoning": "การให้ Background อย่างเดียวไม่ทำให้ผู้รับทราบ Situation และ Assessment ที่มี",
              "communicationPoint": "เพิ่มสิ่งที่เปลี่ยน ความไม่แน่นอน และสิ่งที่ต้องการให้ทีมยืนยัน ไม่เติมรายละเอียดประวัติที่ยังไม่ได้ให้",
              "reviewTopicIds": [
                "communication",
                "baseline"
              ],
              "explanation": {
                "support": "มีข้อมูลว่าการหายใจเปลี่ยนและน่ากังวลขึ้นจาก baseline",
                "missing": "ยังขาดการสื่อสารข้อสังเกตล่าสุด ข้อจำกัด และคำขอทบทวนต่อทีม",
                "alternative": "การให้ Background อย่างเดียวไม่ทำให้ผู้รับทราบ Situation และ Assessment ที่มี",
                "communication": "เพิ่มสิ่งที่เปลี่ยน ความไม่แน่นอน และสิ่งที่ต้องการให้ทีมยืนยัน ไม่เติมรายละเอียดประวัติที่ยังไม่ได้ให้"
              },
              "learningEvidence": [
                {
                  "criterion": "communication",
                  "indicator": "partial"
                },
                {
                  "criterion": "baseline",
                  "indicator": "review"
                }
              ],
              "reviewTopics": [
                "communication",
                "baseline"
              ]
            }
          ],
          "relatedReviewTopics": [
            "communication",
            "baseline",
            "missing"
          ],
          "learningEvidenceCriteria": [
            "communication",
            "missing",
            "baseline"
          ]
        }
      ],
      "debrief": {
        "summary": "สรุปการเรียนรู้จากกรณีสมมติ: รับรู้การเปลี่ยนแปลง จัดลำดับความปลอดภัย ยกระดับการรายงาน และยืนยันความเข้าใจร่วมกัน ไม่ให้คะแนนสมรรถนะ ไม่มีผลผ่าน–ตกหรือใบรับรอง และไม่สรุปความพร้อมปฏิบัติงาน",
        "learningPoints": [
          "การรับรู้การเปลี่ยนแปลง (Recognition of Change): เทียบกับ baseline และข้อมูลผู้ป่วยที่มี โดยไม่สรุปสาเหตุจากสัญญาณเดียว",
          "ความปลอดภัยและการจัดลำดับ (Patient Safety and Prioritization): ไม่ให้การรวบรวมข้อมูลหรือการมุ่งอุปกรณ์ทำให้ชะลอการสื่อสารความกังวล",
          "การตระหนักถึงการยกระดับการรายงาน (Escalation Awareness): ในเหตุการณ์จริงให้หยุดใช้แบบฝึกและแจ้งทีมผู้รับผิดชอบทันทีตาม escalation protocol ของหน่วยงานเมื่อกังวลต่อความปลอดภัย",
          "การยืนยันความเข้าใจ (Closed-loop Communication): ทวนประเด็นที่ทีมรับทราบ สิ่งที่ต้องตรวจสอบตามบทบาท และยืนยันร่วมกัน โดยไม่สร้างคำสั่งรักษา",
          "โครงสร้าง SBAR (SBAR Structure): แยกการเปลี่ยนแปลง ประวัติ ข้อสังเกต ความไม่แน่นอน และคำขอทีมทบทวน",
          "สะท้อนคิดต่อความไม่แน่นอน (Reflection on Uncertainty): แยกสิ่งที่ทราบ สิ่งที่ยังขาด และข้อสันนิษฐานที่ต้องยืนยัน"
        ],
        "reflection": [
          "ข้อมูลใดทำให้คุณรับรู้ว่ามีการเปลี่ยนแปลง และข้อมูลใดยังต้องยืนยัน?",
          "คุณจะแจ้งความกังวลอย่างไรโดยไม่รอข้อมูลครบและไม่สรุปสาเหตุเกินหลักฐาน?",
          "คุณจะยืนยันกับผู้รับข้อมูลอย่างไรว่าเข้าใจตรงกันทั้งสิ่งที่ทราบและยังไม่ทราบ?"
        ]
      }
    }
  ],
  "knowledgeLinks": {
    "patient-first": "shift-assessment",
    "baseline": "shift-assessment",
    "missing": "quick-knowledge",
    "drain": "during-shift",
    "trend": "during-shift",
    "communication": "sbar-handover"
  }
};
