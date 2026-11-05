# Release Candidate QA

Run from a fresh release checkout with Node.js 20 or later (Windows or Linux):

```text
node tests/run-all.cjs
```

No npm install, framework, network access or runtime changes are required. Exit code 0 means the executed automated checks passed; nonzero means validation failed. Browser, accessibility, live GitHub Pages and clinical review are separate checks.

To validate the exact already-fetched PR #1 application snapshot with this QA harness:

```text
node tests/run-all.cjs --ref 374ee6d6447169a60bab446eafc0d34c7910d092
```

The ref command needs Git and that commit available locally; it only runs git show. It reads all seven application files plus unchanged README.txt directly from the ref, and uses tests from this working checkout. It does not checkout, modify, merge or push anything. The default command needs no Git history and tests actual working-tree application files. A source change is not replaced by a development copy.

The runner executes the original four Phase 1–3 suites, release structure/content checks, normalization regressions and complete LF/CRLF functional matrices. Matrix repeats are reported separately, not multiplied into the primary named-test count. Tests use a simulated DOM and do not certify clinical competency or clinical release.

## Preservation baselines

Text hashing uses exactly `text.replace(/\r\n?/g, '\n')` before SHA-256. It does not trim spaces, remove BOM, normalize Unicode or alter escaped clinical strings.

`preservation-baselines.json` records the trusted development source commit 49f6b0d5f6b6a4a9dfad2718351edb8ae9ca6c6d, normalized committed-file hashes and the Phase 1 inline-script baseline. The old inline-script hash depended on mixed line endings in the original working tree. The README baseline likewise used CRLF bytes. Their canonical replacements are derived from committed source, not generated to accept changed clinical content.

The source-preservation hash of knowledge-center.test.cjs changes because that test now imports the shared text-hash helper; the manifest records the reason and replacement. Original module, scenario and simulation semantic hashes remain unchanged.

Clinical Review Register runtime files and tests are intentionally excluded from this release. All clinical content remains DRAFT — PENDING SPECIALIST REVIEW. No actual approval is implied.
