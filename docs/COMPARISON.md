# Cross-Tool Comparison — F-07 Practice Conflict Detection

## Same Context and Instruction

Bolt and Google AI Studio Build received the same project context and the same instruction:

> Implement F-07 Practice conflict detection from context/FEATURES.md in the existing application, following all provided context and standards.

Google AI Studio Build used Gemini 3.8 Flash on 2026-10-01.

## Agreements

Both tools interpreted F-07 as requiring a proposed-practice form with a date, start time, and end time. Both generated behavior for detecting overlapping member availability, reporting when conflicts exist, reporting when no conflicts exist, rejecting missing required fields, and rejecting an end time that is not after the start time. Both approaches also recognized that existing member availability data must be used to evaluate a proposed practice.

This supports the original Loose prediction that an AI implementation would correctly identify overlapping availability and distinguish a non-overlapping practice.

## Differences

Bolt produced useful overlap logic, but it rebuilt the application using React, Vite, TypeScript, and Supabase. That conflicted with the existing HTML/CSS/JavaScript and Cloudflare Worker/D1 architecture, so those architectural changes were rejected and only the useful conflict-detection behavior was adapted into the existing application.

Google AI Studio Build described an implementation that preserved the existing index.html, styles.css, and app.js structure, used lexical scoping and textContent, and added corresponding conflict-detection logic to worker.js. This differed from my integrated implementation, which performs the F-07 comparison in the browser using availability retrieved through the existing GET /entries endpoint.

Agreement between the two tools increased confidence that the four core F-07 behaviors were clear in the specification. Their architectural differences also showed that agreement on feature behavior does not guarantee agreement on how the feature should fit the existing system. The generated AI Studio implementation was used for comparison only and was not treated as verified application code.
