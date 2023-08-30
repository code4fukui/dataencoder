import { waitFileRead } from "https://js.sabae.cc/waitFileRead.js";
import { Base64 } from "https://code4fukui.github.io/Base64/Base64.js";

export const encodeTag = async (file, addtag = true) => {
  const tagmap = {
    "image": "img",
    "audio": "audio",
  };
  const tagname = tagmap[file.type.substring(0, file.type.indexOf("/"))];
  const bin = await waitFileRead(file.file);
  const txt = `data:${file.type};base64,${Base64.encode(bin)}`;
  if (tagname && addtag) {
    return `<${tagname} src="${txt}">`;
  }
  return txt;
};
