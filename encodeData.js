import { Base64 } from "https://code4fukui.github.io/Base64/Base64.js";

export const encodeData = (type, bin) => {
  return `data:${type};base64,${Base64.encode(bin)}`;
};
