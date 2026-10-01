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

_Not resolved yet. Complete after the delegated build is received and verified._

## Success Criteria

_To be completed during verification. Each F-07 EARS row will map to a named automated test, judgment question, or human check._

## Error Log

_To be completed during verification. Record failures from bolt.new, AI Studio Build, automated tests, and judgment evaluation, then sort by failure count._