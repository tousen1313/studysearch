# Contribution Guide

開発するにあたりチームの生産性と品質を向上させ、明確で効率的なコミュニケーションを促進するための指針です。

---

## 開発方法

### 📁 ディレクトリ構成

ソースは全て root ディレクトリ 以下に配置します。root 以下は下記の構成になっています。

※基本的に説明が必要なフォルダ・ファイルのみ記載しています。

```
root/
┃  ┣app/
┃   ┣job/
┃   ┃ ┣components/
┃   ┃   ┣ job-panel/
┃   ┃      ┣ index.tsx
┃   ┃      ┣ job-panel.stroies.tsx
┃   ┃      ┣ hooks.tsx
┃   ┃      ┣ some_test.spec.ts
┃   ┃      ┣ job-menu
┃   ┃            ┣...
┃   ┣components/
┃   ┃  ┣ layouts/
┃   ┃   ┣ header/
┃   ┃     ┣ index.tsx
┃   ┃     ┣ header.stroies.tsx
┃   ┃     ┣ hooks.tsx
┃   ┃     ┗ some_test.spec.ts
┃   ┃
┃   ┣ global.css
┃   ┣ layout.tsx
┃   ┗ page.tsx
┣components/
┃   ┣ button/
┃       ┣ button.tsx
┃       ┣ button.stories.tsx
┣types/
┣const/

.github/
.vscode/
package.json
.eslintrc.json
.prettierrc
```

- page 単位で components フォルダを持つ（components の依存方向は 1 方向）
- 各 components でメインとなるコンポーネントに index.tsx と命名
- 共通 components は root 配下で作成する（例：button）
- storybook、test 用のファイルを components 単位に定義する

_app 配下の追加_

ページの追加は Next.js のページ追加手順に添います。詳細はドキュメントを参照してください。

[Routing](https://nextjs.org/docs/app/building-your-application/routing)

_ユニットテストの配置_

テストを追加する場合、テスト対象のファイルと同一階層に配置するようにしてください。
これは、対象ファイルにテストが作成されているかをファイルツリーから一眼で判別できるようにするための措置です。

ファイル名等の詳細は[ユニットテストの項目](#✅-ユニットテスト)を参照してください。

_Storybook の追加_

Storybook は UI のコンポーネントを個別に描画するツールです。コンポーネントの描画・動作の確認、共通コンポーネントの使用方法のドキュメント化、コンポーネント単位の A11y チェックの実施等に使用します。

ストーリーを追加する場合、対象ファイルと同一フォルダに `{対象ファイル名}.stories.ts` のファイル名で追加してください。
対象ファイルが index.tsx?の場合は `{ディレクトリ名}.stories.tsx` としてください。

ストーリーの追加方法については Storybook のドキュメントを参照してください。

https://storybook.js.org/docs/react/get-started/why-storybook

ストーリーを追加する際には以下の点を考慮するようにしてください。

- 色、状態の表示パターンを可能な限り網羅する
  - なぜ：ストーリーブックを元にビジュアルテストおよび A11y テストを整備します。網羅的に条件を実装しておくことで、テストの漏れを防ぐことができます。
- Components 以下のコンポーネントには必ず作成する
  - なぜ：共通コンポーネントで前述のテストがフェイルする場合アプリケーション全体に影響するため、特に試験が必要です。また、props の使用方法と描画結果に関するドキュメントとしても機能します。
- app 以下についても可能な限り追加する
  - なぜ：REST 等外部への参照を含むコンポーネントに関してはストーリーが作成しきれない場合もありますが、実際にページ上にコンポーネントを配置した結果 A11y に影響する場合もあるため、可能な範囲でストーリーを作成することが推奨されます。また、まれに発生するデータによる表示は dev 環境等で再現しきれない場合もあるため、表示パターンとして用意しておくことで表示確認に有用です。
  - しなくてよいこと：あらゆるコンポーネント階層にストーリーを追加する必要はありません。親コンポーネントのテストにより子コンポーネントの表示条件も網羅できるのであれば子コンポーネントのストーリーを作成するのは過剰です。

_VSCode ファイルについて_

VSCode Extension の Code Spell Checker によるスペルチェックを行なっています。警告が出る場合確認してください。

意図した造語やライブラリ名に対する指摘など不要な指摘の場合は Add words to Workspace Settings から除外リストに追加してください。

_package.json について_

- dependencies, devDependencies 使い分け
  - dependencies :本番環境で必要なパッケージを入れる
  - devDependencies :ビルド環境でのみ扱うものを入れる

_.eslintrc.json, .prettierrc について_

レビューの手間を減らす手段として ESLint/Prettier を設定しています。

気になる箇所があったら随時追加してください。

### 🖊️ コードのスタイルガイドライン

基本的には ESLint のルールに遵守し、それ以外はチームで話し合いを行って下記 Confluence ページにコーディング規約としてまとめています。

[コーディング規約（Next.js ＋ TypeScript）](https://en-japan.atlassian.net/wiki/spaces/ENGAGESEARCH/pages/1384186229)

### 💬 コミットメッセージの規約

下記のルールでコミットメッセージを記述してください。

- Prefix: Jira チケット番号 subject
  - （例） feat: ENGAGE-XXXX 職種選択ボタン追加

commit type としては次のようなものがあります。

- feat
  - 新しい機能
- fix
  - 意味が変わる修正
  - 更新履歴に載るような修正
- docs
  - README.md や CONTRIBUTING.md や本体のプロジェクト全体のドキュメントの変更
- style
  - コードの動作に影響しない、見た目だけの変更（スペース、フォーマット、欠落の修正、セミコロンなど）
  - Lint エラーの修正など
- refactor
  - 意味が変わらない修正(バグの修正や機能の追加ではないコード)
  - 更新履歴に載らないような修正
- test
  - 不足しているテストの追加や既存のテストの修正
- chore
  - ビルドプロセスやドキュメント生成などの補助ツールやライブラリの変更
- perf
  - パフォーマンス改善

---

## テスト手順

### 🚨 Lint

コードの書式やコンパイラでは補足されない記述の間違いを指摘します。Lint も PR 時のテスト対象です。エラーが残る場合該当 PR はマージできません。

VSCode に ESLint がインストールされている場合、エディタ上にエラーが表示されます。

手動で実行する場合は以下を実行してください。

```
npm run lint
```

### ✅ ユニットテスト

ユニットテストには Jest を使用します。Jest でのテストの書き方は Jest のドキュメントを参照してください。

https://jestjs.io/ja/docs/getting-started

テストファイルを追加する場合、対象ファイルと同一フォルダに `{対象ファイル名}.spec.ts` のファイル名で追加してください。
対象ファイルが index.tsx?の場合は `{ディレクトリ名}.spec.tsx` としてください。

手動で実行する場合は以下を実行してください。

```
npm run test
```

### ✔ Storybook テスト

Storybook のテストでは、コンポーネントのビジュアルと props に基づく挙動が検証します。

また、インタラクションテストに関しては Storybook でできる範囲（React Testing Library でできる API との相互作用のような複雑なシナリオは対象外）で行います。

手動で実行する場合は Storybook を立ち上げたあとに以下を実行してください。

```
npm run storybook:test
```

---

## PR 提出前確認事項チェックリスト

- [コーディング規約（Next.js ＋ TypeScript）](https://en-japan.atlassian.net/wiki/spaces/ENGAGESEARCH/pages/1384186229)に記載されている命名規則などを遵守しているか
- 開発環境で Lint・スペルチェッカーによるエラーが残っていないか
- テストが失敗していないか
- カバレッジレポートで明らかに実行速度が遅いテストがないか

### カバレッジレポート

ローカルで下記実行後に`__reports__/jest.html`をブラウザで開いて時間がかかっているテストを調査できます。

```
npm run test
```

---

## Review

### レビュー依頼前にやること

- CI/CD・動作確認を完了させます。
  - エラー・警告がある場合は修正してください。
- [PULL_REQUEST_TEMPLATE.md](.github/PULL_REQUEST_TEMPLATE.md)に沿ってプルリクエストの概要をまとめます。
- PR のスコープが適切か再確認します。
  - 機能追加と同時に大幅なリファクタリングを行うと変更量が多くなります。機能追加・リファクタリングそれぞれで分割 PR による対応を検討してください。

#### 💚 CI/CD

下記５つのジョブを定義しています。これらのジョブはリポジトリが push されたとき、またはプルリクエストが作成されたときにトリガーされます。

- インストール
  - Node.js の設定、依存関係のインストール、そしてモジュールのキャッシュ作成が行われます。
- リント
  - ESLint のチェックが実行されます。
- テスト
  - Jest を使ってユニットテストが実行されます。さらに Jest のカバレッジレポートが作成されます。
- Storybook のビルド
  - Storybook は UI コンポーネントを視覚的に開発するためのツールで、ビルドすることで静的な Web サイトとして出力されます。
- Storybook のテスト
  - Storybook のビルドが完了した後、Playwright をインストールし、Storybook 上のテストが実行されます。Playwright はブラウザ自動化ライブラリで、ブラウザの操作を自動で行うことができます。

詳しくは[.github/workflows/main.yml](.github/workflows/main.yml)をご確認下さい。

### レビュー依頼後にやること

- Merge pull request を押下してマージします。
