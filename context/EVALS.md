# EVALS.md

## RAT Statement

**Date: 2026-10-01**

If bolt.new cannot correctly use the existing member availability data to identify whether a proposed practice overlaps an unavailable time, then delegating F-07 Practice Conflict Detection is pointless. This assumption will be shown false if the delegated build cannot distinguish an overlapping practice from a non-overlapping practice using the existing application data.

## Prediction Stake

**Date: 2026-10-01 — written before delegation**

### Tight
I predict bolt.new will add a proposed-practice input to the existing page and produce a visible conflict result without replacing the existing member availability feature.

### Loose
I predict bolt.new will correctly identify at least one overlapping availability entry when a proposed practice uses the same date and overlapping times, while also reporting no conflicts when the proposed practice does not overlap an existing entry.

### Open
I do not know whether bolt.new will preserve the existing Worker/D1 architecture and use the current `/entries` data rather than introducing separate storage or unnecessary backend behavior.

## Stake Resolution

**Date: 2026-10-01 — resolved after delegation and verification**

- **Tight:** Partially supported. Bolt produced a proposed-practice interface and visible conflict results, but it replaced the existing application architecture with a React/Vite application instead of extending the existing page files. The integrated version preserved the existing member availability feature and added the proposed-practice interface to `index.html`, `styles.css`, and `app.js`.
- **Loose:** Supported. Bolt's conflict-detection logic distinguished overlapping from non-overlapping time ranges. After integration, manual checks and automated tests confirmed both an overlapping practice and a non-overlapping practice.
- **Open:** Resolved negatively. Bolt did not preserve the existing Worker/D1 architecture. It introduced Supabase, a migration, React, TypeScript, and Vite. Those architectural changes were rejected during review; the integrated feature continues to use the existing Worker/D1 availability data.

The RAT assumption remained viable after review because the useful conflict-detection behavior could be integrated with the existing availability data, even though Bolt's proposed storage and application architecture could not be accepted.

## Success Criteria

| F-07 EARS row | Verification check | Current result |
| --- | --- | --- |
| Overlapping proposed practice identifies the conflicting availability entry | Automated GET `/entries` data check + manual browser overlap check + Judgment Q2 | PASS |
| Non-overlapping proposed practice reports no conflicts | Automated GET `/entries` data check + manual browser no-overlap check + Judgment Q3 | PASS |
| Missing required date/start/end is rejected and says why | Manual browser check + source review + Judgment Q4 | PASS |
| End time not after start time is rejected and explained | Manual browser check + source review + Judgment Q5 | PASS |

Automated verification: **4 passed, 0 failed** using `API=https://mgt3745-hw4.rishia10.workers.dev npm test`.

The automated suite also verifies Worker rejection behavior for missing required availability fields and invalid availability time order. Browser-specific proposed-practice validation is verified separately through the manual checks and judgment review above.

## Error Log

| Source | Failure or finding | Count | Disposition |
| --- | --- | ---: | --- |
| bolt.new | Initial ZIP handoff could not be read | 1 | Retried using the same project context as a readable text handoff |
| bolt.new | Replaced the existing HTML/CSS/JS architecture with React/Vite/TypeScript | 1 | Rejected replacement architecture; integrated useful feature behavior into existing page files |
| bolt.new | Introduced Supabase instead of preserving Worker/D1 | 1 | Rejected parallel storage; Worker/D1 remains authoritative |
| Google AI Studio Build | Added a different Worker-side conflict approach from the integrated client-side design | 1 | Recorded as a cross-tool difference; AI Studio code was not integrated |
| Google AI Studio Build | Generated implementation was not independently executed or deployed | 1 | Marked CANNOT FULLY VERIFY in DDR-004; used only for comparison |
| Judgment evaluation | No disagreements across 12 binary questions | 0 | 100% agreement; below-80% finding not triggered |
| Automated tests | No failures in four-test run | 0 | 4 passed; no test failure disposition required |
