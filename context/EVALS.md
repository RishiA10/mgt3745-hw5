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
| Overlapping proposed practice identifies the conflicting availability entry | `evals/f07.test.js` overlap test + manual browser check | PASS |
| Non-overlapping proposed practice reports no conflicts | `evals/f07.test.js` no-overlap test + manual browser check | PASS |
| Missing required date/start/end is rejected and says why | `evals/f07.test.js` missing-fields test + manual browser check | PASS |
| End time not after start time is rejected and explained | `evals/f07.test.js` invalid-time test + manual browser check | PASS |

Automated verification: **4 passed, 0 failed** using `API=https://mgt3745-hw4.rishia10.workers.dev npm test`.

## Error Log

_Finalize after AI Studio Build and the two-column judgment evaluation._

| Source | Failure | Count | Disposition |
| --- | --- | ---: | --- |
| bolt.new | Initial ZIP handoff could not be read | 1 | Retried using the same context as a readable text handoff |
| bolt.new | Replaced the existing HTML/CSS/JS architecture with React/Vite/TypeScript | 1 | Rejected replacement architecture; integrated useful feature behavior into existing page files |
| bolt.new | Introduced Supabase instead of preserving Worker/D1 | 1 | Rejected parallel storage; Worker/D1 remains authoritative |
| Automated tests | No failures in four-test run | 0 | No action required |
