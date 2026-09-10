---
title: PDFとHTMLによる資料作成
type: feature
domain: documentation
status: implemented
x-anatomia:
  kind: specification
---

# PDFとHTMLによる資料作成 {#SPEC-OM-DOCUMENTATION}

既存の分析結果・設計説明・判断資料を、Webの置き場を必要としないPDFと単体HTMLに仕上げる。分析の採点や選択範囲を変更せず、資料の生成・可読性・配布状態を担当する。

- 入口: [omnipotens-documentation](../../.claude/skills/omnipotens-documentation/SKILL.md)
- 組版資材: [document.html](../../.claude/skills/omnipotens-documentation/assets/document.html)
- 生成方法: [rendering.md](../../.claude/skills/omnipotens-documentation/references/rendering.md)

## 出力と組版

ユーザーが形式を限定しない場合は、スマホ向けPDFと自己完結したHTMLを生成する。PDFには検索できる本文と静的な図を収め、切替や折りたたみで根拠が失われないようにする。組版資材は1列、見出し付き評価カード、日本語の折返し、スマホに合わせた印刷寸法を提供する。テンプレート内の文章は使い方の例であり、分析済みの所見ではない。

最終解析では、詳細HTMLとサマリJSONを生成する既存packagerの後に本スキルを適用する。既存JSON契約は変更しない。両読者プロフィール、状態、根拠、確度、不足情報・不足実装を同じ入力から引き継ぐ。Vitiaの価値とパフォーマンスは独立して表現する。

## 完了条件

要求された各形式のファイルが生成され、HTMLのスマホ幅とPDF全ページの描画を確認し、入力・出力ハッシュと確認範囲を記録した時点で資料生成を完了とする。PDFレンダラーが利用できないときはHTMLを保持し、PDFの生成をblockedとして報告する。

共有が依頼された場合は、許可された送信先へPDFを直接添付する。資料生成の完了、API受付、配送、実機プレビュー確認を別々に記録する。資料生成からWeb公開や外部アプリへの送信を推定しない。
