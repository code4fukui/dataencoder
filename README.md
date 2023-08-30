# dataencoder
 
- [dataencoder](https://code4fukui.github.io/dataencoder/)

## Usage

```html
<script type="module">
import { setDropFilesListener } from "https://js.sabae.cc/setDropFilesListener.js";
import { encodeTag } from "https://code4fukui.github.io/dataencoder/encodeTag.js";

setDropFilesListener(document.body, async (files) => {
  const file = files[0];
  document.body.innerHTML = await encodeTag(file);
});
</script>
```
- [run on ss.sabae.cc](https://ss.sabae.cc/#885)
