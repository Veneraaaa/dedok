/** Возвращает "развернутую" копию text */

import { len } from "./len.js";


export function reverse(text) {
  const lenText = len(text);
  let reverseText = '';

  for (let i = lenText - 1; i >= 0; i--) {
    reverseText += text[i];
  }
  return reverseText;
}
