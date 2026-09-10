# Stable report format

`spec/data/omnipotens-summary.json` is the authoring contract for the final summary. The report generator rejects a missing or malformed file rather than silently producing an inconsistent summary.

## Required content

- `schemaVersion`: `4`
- `project`: displayed project title
- `overallAssessment`: the first displayed conclusion, with shared score metadata plus `beginner` and `highResolution` summary, strengths, and priority issues
- `executiveSummary`: exactly `play-logic`, `code`, `ux`, and `market`
- `additionalAnalyses`: one item for every additional analysis requested by the user; otherwise `[]`
- `aiFormatScores`: one or more score rows
- `vitiaScores`: one or more score rows; the generator sorts by `score / maxScore`
- `uxEvaluation`: exactly `core-implementation-alignment` and `expression-conviction-performance`, plus the simulated public-response audience model, assumptions, and limitations
- `playStructureScores`: exactly `idea`, `structure`, and `scalability`
- `ludus.novelty`: novelty score and rationale
- `ludus.recommendedImplementations`: one or more play-dictionary proposals with an explicit `uxConnection`; in `operations` mode, a supported proposal to retain an existing mechanic is valid

Every narrative, score row, novelty item, and implementation proposal has both `missingInformation` and `missingImplementation`. Use `[]` only when no gap is known in the evidence scope. Every score row also records `rationale` and `sourceRefs`. Set `marketAdvantage: true` only when evidence supports an actual market advantage; the renderer bolds those Vitia rows.

Every score row and `ludus.novelty` also has `averageImprovement`: `decision` is `improve` only when the score and evidence show a material issue, otherwise `hold`; `proposal` is one proportionate change or an explicit current-design hold; and `rationale` explains why the score, uncertainty, and change risk justify that decision. There is no universal score threshold that forces improvement. Review honestly and never score missing evidence as zero.

The UX public response is an AI average-reaction simulation, not measured user, review, sales, or telemetry data. Record the simulated audience, assumptions, and limitations beside the scores.

State the decision mode and its evidence limits in both overall-assessment profiles, using the existing summary fields. In `operations` mode, include material gains, retained value, and losses for affected players; use [operations-review.md](operations-review.md). A preservation proposal in `ludus.recommendedImplementations` must name the retained mechanic, dictionary evidence, and UX effect. It does not claim that new code is required. The operations-only viewpoints are not additional scored dimensions and do not apply to `new` mode.

Each executive-summary direction and additional analysis has `beginner` and `highResolution` text. The first explains the judgment in plain Japanese; the second preserves technical detail, evidence density, and exact terminology. Both profiles cover the complete overall assessment and every summary direction.

The deterministic packager publishes `report/omnipotens-summary.json`. It renders buttons that switch the complete executive summary between `beginner` and `highResolution`, then inserts `各レイヤでの解析データは以下` before play-structure, UX, AI Format, Vitia, Ludus, evidence, and stage data.

Do not include a separate `00. エグゼクティブサマリ` section in `omnipotens-report-layout.json`. The packager ignores that exact legacy section during migration so the summary is never duplicated.

Start from [omnipotens-summary.example.json](omnipotens-summary.example.json) and replace every example statement and reference with project evidence.

## PDF and self-contained sharing HTML

Use [omnipotens-documentation](../../omnipotens-documentation/SKILL.md) to produce the human-facing PDF and sharing HTML after the deterministic detailed report. Both use the same summary JSON and evidence. Do not change this schema or duplicate the analysis to accommodate a different page size.

The detailed HTML retains its score tables and complete profile switch. In the mobile sharing HTML and PDF, wide score rows may become labelled cards that preserve every field and comparison. Include both complete executive-summary profiles as labelled sections in a full PDF, followed by the raw-analysis boundary. A reader-specific excerpt requires an explicit scope label and preserves material qualifications.

Keep all content needed to understand the findings within the sharing file. Render essential diagrams statically for PDF, and do not depend on profile switches, collapsed content, search filters, or a separately hosted page to expose evidence. PDF generation and visual review are separate from running `omnipotens-report.mjs`.
