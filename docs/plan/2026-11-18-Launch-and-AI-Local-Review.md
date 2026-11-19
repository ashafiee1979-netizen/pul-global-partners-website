# Launch and AI Services - Local Review

Date: 2026-11-18
Release gate: Owner approved GitHub push and production deployment on 2026-11-18.
Deploy only the reviewed changes; exclude the unrelated untracked Commitments page.
Preview: http://localhost:4180/solutions/

## Service Architecture

Home, Solutions, and the web Capability overview now use one combined service:
U.S. Business Launch & International Expansion.

Its two segments are U.S. Business Launch and International Business Expansion.
Both retain their original introductory descriptions, four scope items, advisory
notes, and call-request links. The original international-office-launch anchor
remains valid; business-launch leads to the combined platform. A new
us-business-launch anchor links to the U.S. segment.

The new separate service is AI Implementation & Business Productivity, positioned
after the combined launch platform. Its eight scope areas are:

1. AI readiness and opportunity assessment.
2. Workflow design and automation.
3. Office AI setup and integration.
4. Knowledge and document assistants.
5. Program, proposal, and reporting support.
6. Staff training and change management.
7. Responsible AI and information safeguards.
8. Piloting, measurement, and continuous improvement.

## Audiences and Practical Applications

- Small businesses: intake, customer correspondence, internal knowledge, document
  preparation, meeting follow-up, and administrative reporting.
- NGOs: staff-reviewed funding research, proposal drafts, donor reporting,
  knowledge retrieval, and program communications.
- International organizations: approved multilingual knowledge workflows,
  cross-office information retrieval, meeting outputs, and reporting coordination.

Specific applications require discovery, appropriate authorization, access
controls, suitable licensing, data readiness, testing, and a signed scope.
Do not present potential services as completed client assignments or claim
certification, vendor partnerships, guaranteed compliance, or autonomous approvals.

## Delivery and Measurement

Assess and baseline a workflow, prioritize the opportunity, design safeguards,
configure a pilot, train users, compare results, and scale only after acceptance.
Record completion time, quality, rework, cost, and adoption against comparable
baseline tasks. Human review and exception handling remain part of the workflow.
Do not promise 5X-10X organizational productivity. A task-specific ambition may
only become a published performance claim after evidence supports it.

## Research Basis

- NIST Generative AI Profile:
  https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf
  Supports risk assessment, human oversight, and documented evaluation.
- TechSoup nonprofit AI services:
  https://page.techsoup.org/ai-services-for-nonprofits
  Supports the proposed readiness-to-implementation service sequence for NGOs.
- Microsoft Research, Shifting Work Patterns with Generative AI:
  https://www.microsoft.com/en-us/research/publication/shifting-work-patterns-with-generative-ai/
  Task-specific findings do not substantiate a universal 5X-10X productivity promise.

These sources inform the proposed service design; they do not verify PUL delivery
capacity or establish an affiliation with these organizations.

## Boundaries and Handoff

- Downloadable Capability Statement PDF is unchanged, pending document approval.
- Existing untracked commitments page and generated Next environment types were
  not included in this scope and must not be deleted or inadvertently released.
- Follow-up QA patched Next.js and @next/mdx to 16.4.6, addressing the previously
  reported advisories. Full npm audit now reports zero known vulnerabilities.
  The patch remains local with the service changes, pending release approval.
- Next session: owner review of the combined launch title, AI scope, image,
  order, and wording; confirm delivery capacity before publication.

## QA Evidence

E:\PUL Global Partners\09_Working Files and QA\QA Reviews\Website Launch and AI 2026-11-18

Typecheck and production build passed. Browser tests cover Home, Solutions,
and Capability at 1440, 1280, 768, 390, and 360 px; verify segment anchors,
service structure, unique IDs, no horizontal overflow, and no page exceptions.
