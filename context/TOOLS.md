# TOOLS.md

Never store credentials, keys, tokens, or passwords in this repository.

| Service | Trusted with | Credentials live | Crossing statement | Switching cost |
|---|---|---|---|---|
| Cloudflare Workers + D1 | Availability entries and request data | Cloudflare account / Codespace authentication | User availability data crosses from the browser to Cloudflare Workers and D1 for processing and persistence, and I am accountable for that crossing. | Medium: export data and replace the Worker/storage provider |
| GitHub + Codespaces | Source code, documentation, commit history, development environment | GitHub account | My project files and repository history cross to GitHub for hosting and development, and I am accountable for what I commit there. | Medium: clone/export the repository and recreate the environment elsewhere |
| GitHub Copilot | Repository context supplied for coding suggestions | GitHub account | Repository context may cross to GitHub Copilot when generating suggestions, and I am accountable for reviewing anything I accept. | Low: disable Copilot and work without its suggestions |
| wrangler (npm) | Worker code, configuration, deployment requests, and D1 operations | Cloudflare authentication in Codespace | Worker code and deployment operations cross through wrangler to Cloudflare, and I am accountable for reviewing what is deployed. | Low: use another Cloudflare deployment method |
| Bolt | HW5 context files and existing application code supplied for F-07 delegation | Bolt account/session | Project context and code crossed to Bolt so it could propose the F-07 implementation, and I am accountable for reviewing and selectively integrating its output. | Low: implement the feature manually or use another coding tool |
| Google AI Studio Build | Same HW5 context and F-07 instruction used for the comparison delegation | Google account/session | Project context and the F-07 instruction crossed to Google AI Studio Build for a comparison implementation, and I am accountable for how I evaluate its output. | Low: use another comparison tool |
| ChatGPT | Assignment requirements, project context, code excerpts, and verification results used for guidance and review | ChatGPT account/session | Project information crossed to ChatGPT for implementation guidance, troubleshooting, documentation review, and judgment review, and I am accountable for checking the resulting guidance against the repository and rubric. | Low: perform the review manually or use another assistant |

## Revisit triggers

- A new external service is introduced.
- A service changes its data handling, pricing, terms, or hosting assumptions.
- A credential or authentication method changes.
