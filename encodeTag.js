import { waitFileRead } from "https://js.sabae.cc/waitFileRead.js";
import { encodeData } from "./encodeData.js";

export const encodeTag = async (file, addtag = true) => {
  const tagmap = {
    "image": "img",
    "audio": "audio",
  };
  const tagname = tagmap[file.type.substring(0, file.type.indexOf("/"))];
  const bin = await waitFileRead(file.file);
  const txt = encodeData(file.type, bin);
  if (tagname && addtag) {
    return `<${tagname} src="${txt}">`;
  }
  return txt;
};
