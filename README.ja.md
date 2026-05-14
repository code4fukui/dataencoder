# dataencoder

バイナリデータをさまざまなテキストベースの形式やデータURIにエンコードするための軽量JavaScriptライブラリです。

## デモ

インタラクティブなデモを試してみてください: **[code4fukui.github.io/dataencoder/](https://code4fukui.github.io/dataencoder/)**

([ss.sabae.cc](https://ss.sabae.cc/#885) でも利用可能です)

## 特徴

- **複数のエンコーディング:** Base64、Base64URL、Base1024Y、Base256B、Base16384、Base16をサポートしています。
- **データURI生成:** バイナリデータとMIMEタイプからデータURIを簡単に生成できます。
- **自動HTMLタグ生成:** 対応するファイルタイプに応じて`<img>`や`<audio>`タグを生成します。
- **ブラウザ対応:** ビルド不要で、ブラウザ上で直接実行できるESモジュールです。
- **動画フレーム抽出:** 動画要素からフレームを画像としてキャプチャするユーティリティを含みます。

## 基本的な使用方法

この例では、ウェブページにドラッグ＆ドロップ領域を設定します。画像または音声ファイルをドロップすると、ブラウザ内で直接表示または再生されます。

```html
<!DOCTYPE html>
<html>
<body>
  <p>ここに画像または音声ファイルをドロップしてください。</p>
  <div id="output"></div>

  <script type="module">
    import { setDropFilesListener } from "https://js.sabae.cc/setDropFilesListener.js";
    import { encodeTag } from "https://code4fukui.github.io/dataencoder/encodeTag.js";

    setDropFilesListener(document.body, async (files) => {
      if (files.length === 0) return;
      const file = files[0];
      // データURIを含む<img>または<audio>タグを生成
      document.getElementById("output").innerHTML = await encodeTag(file);
    });
  </script>
</body>
</html>
```

## API

### `encodeTag(file, addtag = true)`

[File](https://developer.mozilla.org/en-US/docs/Web/API/File)オブジェクトをデータURIにエンコードします。

- `addtag`が`true`（デフォルト）で、ファイルが画像または音声タイプの場合、`src`属性にデータURIを含む`<img>`または`<audio>`タグを返します。
- それ以外の場合、データURI文字列のみを返します。

```javascript
import { encodeTag } from "https://code4fukui.github.io/dataencoder/encodeTag.js";

// 'imageFile'が入力またはドロップイベントからのFileオブジェクトであると仮定
const imgTag = await encodeTag(imageFile); // <img src="data:image/png;base64,...">
const dataUri = await encodeTag(imageFile, false); // data:image/png;base64,...
```

### `encodeData(type, bin)`

MIMEタイプ文字列とバイナリデータ（`Uint8Array`）からBase64エンコードされたデータURIを生成します。

```javascript
import { encodeData } from "https://code4fukui.github.io/dataencoder/encodeData.js";
```
