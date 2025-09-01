# 📝 min-Excalidraw

<img src="https://github.com/excalidraw/excalidraw/blob/master/dev-docs/static/img/logo.svg" width="150" alt="Excalidraw Logo">


## 概要

このリポジトリは **Excalidraw** をセルフホストで動作させる、最小限のテスト用サンプルです。

- **React + Vite** で構築
- Excalidrawの描画・読み込み専用表示が可能
- 公式パッケージのみ利用、シンプルな構成
- 表示ページと同階層のExcalidrawファイルを表示

## 使い方 - dev

1. リポジトリをクローン
2. `npm install`
3. `npm run dev`
4. ブラウザで `http://localhost:5173` を開く

## 使い方 - Build

1. Excalidrawファイルを編集
2. 必要に応じ、main.jsxのEXCALIDRAW_FILEを編集
3. `npm run build`
4. ウェブサーバーに、出力されたdist内ファイルをアップロード
5. ブラウザでウェブページにアクセス

## サンプル画面

![Excalidraw Sample](https://github.com/Wolfcrafter321/min-Excalidraw/blob/main/screenshot.png)

---

> **コード内一部・本ReadMeにGPT・Copilot利用。**
