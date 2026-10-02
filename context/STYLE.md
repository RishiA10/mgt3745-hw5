---
color-primary: "#123552"
color-accent: "#b16d00"
color-background: "#f7f9fb"
color-text: "#172b40"
color-error: "#922020"
color-border: "#526578"
color-divider: "#b8c5d0"
color-input-background: "#ffffff"
font-body: "Arial, Helvetica, sans-serif"
font-heading: "Arial, Helvetica, sans-serif"
font-size-min: 16px
space-unit: 8px
radius: 5px
---

# STYLE.md

## Rationale

- **color-primary**: Dark blue gives primary actions clear emphasis while white button text has a 12.68:1 contrast ratio.
- **color-accent**: Amber is reserved for focus outlines so keyboard focus is visible without using it for body text.
- **color-background**: The near-white background keeps the availability interface visually quiet and supports strong text contrast.
- **color-text**: Dark blue-gray is the default body text because it has a 13.67:1 contrast ratio on the background.
- **color-error**: Dark red communicates validation errors together with written messages, and has an 8.12:1 contrast ratio on the background.
- **color-border**: Muted blue-gray separates input boundaries without competing with their labels or entered text.
- **color-divider**: The lighter blue-gray separates entries and sections while keeping those boundaries secondary to content.
- **color-input-background**: White distinguishes editable fields from the page background; normal text on white has a 14.42:1 contrast ratio.
- **font-body**: Arial with Helvetica and sans-serif fallbacks keeps form text familiar and readable without requiring an external font dependency.
- **font-heading**: The same family is used for headings so hierarchy comes from size and weight rather than unnecessary typefaces.
- **font-size-min**: 16px is the minimum intended body and control text size so essential form content is not presented as tiny text.
- **space-unit**: An 8px base provides a repeatable spacing unit rather than arbitrary spacing decisions.
- **radius**: A 5px radius distinguishes interactive controls without making the interface visually decorative.

## Text Contrast Pairs

- `#172b40` on `#f7f9fb`: **13.67:1** — body text, PASS.
- `#ffffff` on `#123552`: **12.68:1** — button text, PASS.
- `#922020` on `#f7f9fb`: **8.12:1** — validation/error text, PASS.
- `#172b40` on `#ffffff`: **14.42:1** — input text, PASS.
- `#b16d00` is accent-only for focus outlines and is not used as text.

## Refusals

1. No important status or validation result will be communicated by color alone; written error and conflict messages must accompany visual styling. **Law of UX: Doherty Threshold** — users need immediate, understandable feedback after an action rather than an ambiguous color change.
2. No unsolicited modal will interrupt availability entry or conflict checking. **Law of UX: Tesler's Law** — the interface should not transfer unnecessary interaction complexity to users when inline feedback can handle the task.

## Sources

- Admired: the existing member-availability interface carried forward from HW4; HW5 keeps its restrained form-first presentation.
- Resented: interruptive form interfaces that depend on pop-ups or color-only feedback; the refusals above document the behaviors intentionally excluded.
