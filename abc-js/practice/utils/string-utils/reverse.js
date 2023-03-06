/** Возвращает "развернутую" копию text */

import { len } from "./len.js";


export function reverse(text) {
    const lenText = len(text);
    let newStr = '';
    
    for (let i = lenText - 1; i >= 0; i--) {
      newStr += text[i];
    }
    return newStr;
}
