# Operations review

Read this reference only for `operations` mode. It adds criteria for decisions about an existing player experience. It is not a checklist for `new` mode, and it does not automatically select infrastructure operations, LiveOps, or any other analysis.

## Establish the comparison

Record the mode, decision, current build or rules, proposed change, affected audiences, and observation window in `spec/plan/00-source-manifest.md`. Separate observed player behavior, documented design intent, analyst inference, and missing evidence. Compare like audiences and exposure periods; a before/after difference alone does not establish that the update caused it.

Include new arrivals to the operated product, experienced players, returning players, and other materially affected groups when relevant to the decision. These are cohorts within `operations` mode, not reasons to switch to `new` mode. Missing history limits the comparison; it does not turn the review into a new-development evaluation.

## Choose analyses for the decision

The existing run plan remains the authority for selected stages and hard dependencies. The following are routing criteria, not an automatic preset:

| Decision | Skill or analysis to consider | Operations judgment |
| --- | --- | --- |
| Rules, balance, progression, repeat play | Ludus; `core.play`, `core.mechanics-economy` | Does the change improve meaningful play while retaining useful learning and choice? Novelty is supporting context. |
| Onboarding, presentation, paid boundaries, audience promise | Vitia; `core.ux`, `core.marketability` | Does the change deliver the value players expect, and which audiences gain or lose? Keep appeal and delivery evidence distinct. |
| Implementation risk or maintainability | Anatomia / AI Format; relevant code, traceability, and architecture stages | Which affected rules and dependencies could regress? Evaluate the changed scope and necessary dependencies. |
| Behavioral evidence or an experiment | `service.data-experiments` | Is the observed difference credible for the affected cohorts and time window? |
| Events, community, support, migration communication | `service.liveops` | Can the change and its transition be operated without losing the value players rely on? |
| Backend reliability or rollout constraints | `service.operations`, optionally `service.qa-release` | Can the affected service sustain and safely deliver the change? Offline products do not automatically need backend analysis. |
| Material revenue, cost, trust, or release obligations | Relevant existing `service.*` options | Select only the domains needed by the concrete change. |

Use the existing evidence-cache rules for any selected service analysis. This reference is an authored review rubric; it introduces no universal metric thresholds or additional external-service permission.

## Four operations-only viewpoints

Apply these viewpoints within the selected analyses. If a viewpoint needs an unselected stage, record the coverage limit and recommend the stage without silently adding it. A documented lack of relevance is `not-applicable`; absent evidence is `unknown`.

| Viewpoint | What to inspect | Evidence and decision |
| --- | --- | --- |
| Experience consistency | Whether the promise, first-use experience, established play, and paid boundaries still agree after the change. | Trace actual journeys and the promises shown to each affected cohort. Identify which experience becomes clearer or breaks, rather than assuming conversion proves consistency. |
| Meaningful choice and learning | Whether learned skills and different strategies remain useful; whether new options create meaningful tradeoffs or only more steps. | Compare decisions, viable approaches, feedback, and outcomes before and after. Choice count or a longer progression path alone is insufficient. |
| Value across continued use | What players gain at first use, repeated use, mastery, saturation, return, and a satisfying stopping point. | Look for renewed value, pacing, fatigue, and appropriate completion by cohort. More sessions or time spent alone does not prove more value; finishing is not automatically failure. |
| Value lost through change | Effects on learned skills, owned items, earned progress, relationships, status, habits, and confidence in prior commitments. | Name who gains and loses, the size and reversibility of the loss, and any migration, notice, compensation, or preservation needed. Report material losses separately from aggregate gains. |

## Make the operational decision

For each material finding, record the current baseline, proposed benefit, affected audience, evidence and uncertainty, value to retain, and possible loss. Use project-specific decision criteria rather than a universal pass score. Conclude with adopt, revise, hold, or gather evidence, plus a reason. For an adopted change, describe proportionate observation and rollback or mitigation conditions; a report recommendation does not authorize execution.

Map the conclusion to existing report fields: `averageImprovement.decision` remains `improve` or `hold`, with the precise operational decision and uncertainty in its proposal and rationale. Use `improve` for a supported change; use `hold` when preserving the current design or gathering evidence before deciding. End every item with `不足情報` and `不足実装`.

When Ludus is selected, a dictionary-backed preservation proposal may occupy `ludus.recommendedImplementations`: name the mechanic to retain, its dictionary reference, its UX effect, and why change is unwarranted. Do not invent an implementation gap to populate the array. Retain the existing novelty assessment as context, without making increased novelty an operations objective.

Write findings in the corresponding existing stage artifacts and summarize the mode and material tradeoffs in both executive-summary profiles. Do not create a separate scored stage or a placeholder report for unselected analyses.
