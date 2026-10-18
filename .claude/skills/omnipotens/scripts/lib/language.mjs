const translations = {
  ja: {
    htmlLang: 'ja', theme: '◐ テーマ', print: '⎙ 印刷', stage: 'Stage', artifactUnit: 'artifacts',
    relatedHtml: '関連HTML', relatedReports: '関連レポート', finalReport: 'Final report',
    finalTitle: 'Omnipotens Final Report',
    finalDescription: '仕様、遊び、ドメイン、コード、メカニクス、UX、市場性、議論を、存在する証拠だけから統合した最終レポート。',
    includedStages: '収録工程', inputArtifacts: '入力成果物', outputFormat: '生成形式',
    searchPlaceholder: '全工程を検索', emptySearch: '一致する工程がありません。',
    jsonManifest: 'JSON manifest', interactiveHtml: 'Interactive HTML report', emptyEvidence: 'なし（現時点の証拠範囲）',
    missingInformation: '不足情報', missingImplementation: '不足実装', evaluationItem: '評価項目', score: 'スコア',
    honestDiagnosis: '正直な診断', decision: '判断', averageImprovement: '平均的改善提案', reference: '参照',
    improve: '改善する', maintain: '現状維持', playDictionary: '遊びの辞書:', uxConnection: 'UXへの接続:', priority: '優先度:',
    uxSimulation: 'UXスコア（AI平均反応シミュレーション）', audienceModel: '想定する大衆像:', assumptions: '前提:', limitations: '限界:', uxAxes: 'UXの2軸',
    overallAssessment: '総合評価：', strengths: '主な強み', priorityIssues: '優先して解く課題', confidence: '評価の確度:',
    itemSummary: '各項目のまとめ', executiveSummary: 'エグゼクティブサマリ', displayDetail: '表示の詳しさ',
    beginner: '学生・初学者向け', highResolution: '高解像度データ', analysisBoundary: '各レイヤでの解析データは以下',
    analysisBoundaryDescription: 'ここから先は、エグゼクティブサマリの根拠となる評価値、実装証拠、不足情報、不足実装をレイヤごとに示します。',
    playStructureScores: '遊びの構造スコア', aiFormatScores: 'AI Format スコア', vitiaScores: 'Vitia 市場性スコア（高い順）',
    novelty: 'Ludusの新規性評価', recommendations: '遊びの辞書からUXへつなぐ実装提案',
  },
  en: {
    htmlLang: 'en', theme: '◐ Theme', print: '⎙ Print', stage: 'Stage', artifactUnit: 'artifacts',
    relatedHtml: 'Related HTML', relatedReports: 'Related reports', finalReport: 'Final report',
    finalTitle: 'Omnipotens Final Report',
    finalDescription: 'A consolidated final report linking specification, play, domains, code, mechanics, UX, marketability, and discussion using only available evidence.',
    includedStages: 'Included stages', inputArtifacts: 'Input artifacts', outputFormat: 'Output format',
    searchPlaceholder: 'Search all stages', emptySearch: 'No matching stages.',
    jsonManifest: 'JSON manifest', interactiveHtml: 'Interactive HTML report', emptyEvidence: 'None within the current evidence.',
    missingInformation: 'Missing information', missingImplementation: 'Missing implementation', evaluationItem: 'Evaluation item', score: 'Score',
    honestDiagnosis: 'Honest diagnosis', decision: 'Decision', averageImprovement: 'Average improvement proposal', reference: 'References',
    improve: 'Improve', maintain: 'Maintain', playDictionary: 'Play dictionary:', uxConnection: 'UX connection:', priority: 'Priority:',
    uxSimulation: 'UX score (AI average response simulation)', audienceModel: 'Assumed audience:', assumptions: 'Assumptions:', limitations: 'Limitations:', uxAxes: 'Two UX axes',
    overallAssessment: 'Overall assessment: ', strengths: 'Key strengths', priorityIssues: 'Priority issues to resolve', confidence: 'Assessment confidence:',
    itemSummary: 'Item summaries', executiveSummary: 'Executive summary', displayDetail: 'Display detail',
    beginner: 'Students and beginners', highResolution: 'High-resolution data', analysisBoundary: 'Analysis data by layer follows',
    analysisBoundaryDescription: 'The following layers show the assessment values, implementation evidence, missing information, and missing implementation that support the executive summary.',
    playStructureScores: 'Play structure scores', aiFormatScores: 'AI Format scores', vitiaScores: 'Vitia marketability scores (highest first)',
    novelty: 'Ludus novelty assessment', recommendations: 'Implementation proposals connecting the play dictionary to UX',
  },
};

export const supportedLanguages = Object.freeze(Object.keys(translations));

export function normalizeLanguage(value = 'ja') {
  const candidate = String(value || 'ja').trim().toLowerCase();
  const primary = candidate.split('-')[0];
  if (primary === 'jp') return 'ja';
  if (translations[primary]) return primary;
  throw new Error(`Unsupported report language: ${value}. Supported values: ${supportedLanguages.join(', ')}`);
}

export function reportText(language = 'ja') {
  return translations[normalizeLanguage(language)];
}
