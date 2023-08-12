# engage-search2-front

エンゲージ Search2 の Web フロントエンドです。

## Getting started

- **Node.js v20.2.0**
- **VSCode**

## VSCode Setting

最低限以下の 拡張機能 をインストールしてください。
これらは 拡張機能 で `@recommended` を検索すると表示されます。

- ESLint
  - Linter 警告をエディタ上に表示します。
  - https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
- Prettier
  - ファイル保存時に自動フォーマットを実行します。
  - https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
- Code Spell Checker
  - スペルチェッカーです。
  - https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker
- Jest
  - ユニットテストを実行できます。
  - https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest
- Github Actions
  - CI の実行結果を確認できます。
  - https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-github-actions

## Setup

### engage-search2-front clone

https://github.com/en-japan/engage-search2-front

### 初回の場合　以下実施

```bash
$ npm install
```

### npm scripts

| コマンド                  | 説明                                                                                                                             |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `npm run dev`             | 開発サーバーを起動します。(Next.js)                                                                                              |
| `npm run build`           | 本番環境のためのアプリケーションをビルドします。(Next.js)                                                                        |
| `npm run start`           | ビルドしたアプリケーションを起動します。(Next.js)                                                                                |
| `npm run lint`            | Lint ツールを実行します。(Next.js)                                                                                               |
| `npm run format`          | Prettier を使用してファイルをフォーマットします。対象は`.gitignore`で指定されていない js, jsx, ts, tsx, json, css ファイルです。 |
| `npm run test`            | Jest を使用してテストを実行します。                                                                                              |
| `npm run test:storybook`  | Storybook のテストをローカルサーバー(`http://localhost:6006`)で実行します。                                                      |
| `npm run storybook`       | Storybook の開発サーバーを起動します。ポートは`6006`です。                                                                       |
| `npm run storybook:build` | Storybook の静的ビルドを生成します。出力は`storybook-static`ディレクトリに保存されます。                                         |
| `npm run storybook:serve` | `http-server`を使って Storybook の静的ビルドをサーブします。アドレスは`localhost`で、ポートは`6006`です。                        |
| `npm run storybook:test`  | Storybook のテストを実行します。テストの前に`http://localhost:6006`が利用可能になるまで待ちます。                                |
| `npm run storybook:ci`    | Storybook のビルドを生成し、サーブとテストを同時に実行します。                                                                   |

### 開発サーバーの起動

```bash
$ npm run dev
```

### Storybook の起動

```bash
npm run storybook
```

### ローカルで API を通信したい場合

#### engage-search2-back clone

https://github.com/en-japan/engage-search2-back

#### Setup は対象の README 参照

## Contributing

コントリビュートの方法については[CONTRIBUTING.md](./CONTRIBUTING.md)を参照してください。
