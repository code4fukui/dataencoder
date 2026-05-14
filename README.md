> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

# dataencoder

A lightweight JavaScript library for encoding binary data into various text-based formats and data URIs.

## Demo

Try the interactive demo: **[code4fukui.github.io/dataencoder/](https://code4fukui.github.io/dataencoder/)**

(Also available at [ss.sabae.cc](https://ss.sabae.cc/#885))

## Features

-   **Multiple Encodings:** Supports Base64, Base64URL, Base1024Y, Base256B, Base16384, and Base16.
-   **Data URI Generation:** Easily create data URIs from binary data and a MIME type.
-   **Automatic HTML Tags:** Generates `<img>` and `<audio>` tags for corresponding file types.
-   **Browser-Ready:** ES module that runs directly in the browser with no build step required.
-   **Video Frame Extraction:** Includes utilities to capture a frame from a video element as an image.

## Basic Usage

This example sets up a drag-and-drop area on a web page. When an image or audio file is dropped, it will be displayed or played directly in the browser.

```html
<!DOCTYPE html>
<html>
<body>
  <p>Drop an image or audio file here.</p>
  <div id="output"></div>

  <script type="module">
    import { setDropFilesListener } from "https://js.sabae.cc/setDropFilesListener.js";
    import { encodeTag } from "https://code4fukui.github.io/dataencoder/encodeTag.js";

    setDropFilesListener(document.body, async (files) => {
      if (files.length === 0) return;
      const file = files[0];
      // Generates an <img> or <audio> tag with the data URI
      document.getElementById("output").innerHTML = await encodeTag(file);
    });
  </script>
</body>
</html>
```

## API

### `encodeTag(file, addtag = true)`

Encodes a [File](https://developer.mozilla.org/en-US/docs/Web/API/File) object into a data URI.

-   If `addtag` is `true` (default) and the file is an image or audio type, it returns an `<img>` or `<audio>` tag with the data URI in the `src` attribute.
-   Otherwise, it returns only the data URI string.

```javascript
import { encodeTag } from "https://code4fukui.github.io/dataencoder/encodeTag.js";

// Assuming 'imageFile' is a File object from an input or drop event
const imgTag = await encodeTag(imageFile); // <img src="data:image/png;base64,...">
const dataUri = await encodeTag(imageFile, false); // data:image/png;base64,...
```

### `encodeData(type, bin)`

Creates a Base64-encoded data URI from a MIME type string and binary data (`Uint8Array`).

```javascript
import { encodeData } from "https://code4fukui.github.io/dataencoder/encodeData.js";