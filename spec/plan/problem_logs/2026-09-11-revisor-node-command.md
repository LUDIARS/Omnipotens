# Revisor登録テストのNode起動失敗

- Date: 2026-09-11
- Status: configuration corrected; Revisor verification pending
- Area: Omnipotens / Revisor repository registration
- Severity: PR #1685 の審査をブロック

## Summary

RvWFへの初回登録でNodeの絶対パスを実行コマンドに設定したため、Windows上でテスト本体の開始前に失敗した。新規・運用の評価分離や資料作成スキルの検証結果は、この起動失敗からは判断できない。

## Evidence

- Revisor PR: `LUDIARS/Omnipotents#1685`
- 審査対象: `530a891a86b5608f37b8b5ab71111432a4ebf895`
- 審査完了記録: `2026-09-10T23:39:56.277Z`
- 登録テスト: `Report regression suite`、exit code `1`、実行時間 `56 ms`
- stderrは `'C:\Program'` で始まるコマンド未認識エラー。日本語部分はRevisorの保存出力で文字化けしていた。
- 変更前: command = `C:\Program Files\nodejs\node.exe`、args = `[".claude/skills/omnipotens/scripts/test.mjs"]`

## Regression Context

今回の初回登録設定に起因する。テスト本体の回帰を示す証拠はなく、以前の合格からの再発とは確認していない。

## Cause

Revisorの `src/ci.mjs` にある `configuredProcess` はWindowsで登録コマンドを `cmd.exe /d /s /c` の引数に渡す。空白を含むNodeの絶対パスが、この経路で一つの実行ファイル名として扱われなかった。登録契約はダブルクォートを禁止しているため、実行パスを引用符付きで登録する方法は採れない。

## Fix Requirements

- Omnipotensの既存READMEと同じ `node` コマンドをRevisorの公式登録APIで設定する。
- テスト名、スクリプト引数、cwd、120秒の制限、選択条件を保持し、テストを除外・短縮しない。
- PR #1685 を同じ標準審査経路へ再投入する。

## Verification

公式登録APIの応答で command = `node`、args、cwd、timeoutMs、kinds、runtime、alwaysの値を確認した。ローカルの `Get-Command node` は元のNode実行ファイルに解決された。

このセッションでテストは実行していない。Revisorによる再審査で登録テストが開始・完了することを確認し、未確認の合格を記載しない。

## Follow-up

再審査の通知を待つ。別のテスト失敗が報告された場合は、その保存ログを根拠に切り分ける。Revisor本体のコマンド起動処理は今回の修正対象に含めない。
