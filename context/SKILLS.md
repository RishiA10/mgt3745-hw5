# SKILLS.md

## Skill 1 — Extend an Existing Feature Without Replacing Its Architecture
1. Read FEATURES.md, STANDARDS.md, and ARCHITECTURE.md before changing code.
2. Identify the existing data source and reuse it instead of creating parallel storage.
3. Add the smallest UI and logic needed for the new EARS behavior.
4. Preserve existing file boundaries unless the specification requires a new boundary.
5. Render user-provided strings with textContent.
6. Test both the expected behavior and unwanted-behavior cases.
7. Review the diff for unnecessary frameworks, dependencies, or architecture changes.

## Skill 2 — Treat Delegated AI Output as an Untrusted Proposal
1. Commit evaluation criteria before giving the specification to the delegated tool.
2. Record what context crosses to the tool and what generated output crosses back.
3. Preserve required original artifacts before modifying or integrating them.
4. Compare generated behavior against the specification and existing architecture.
5. Reject unnecessary dependencies, storage systems, or framework replacements.
6. Verify accepted behavior with automated and human checks.
7. Record failures, uncertainty, fixes, and disposition in the DDR and EVALS.md.
