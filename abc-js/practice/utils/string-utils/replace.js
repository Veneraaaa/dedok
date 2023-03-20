import { isString } from "./common.js";
import { indexOf } from "./index-of.js";
import { substring } from "./substring.js";
/** Возвращает строку text, где первое вхождение search поменяно на target.
 * text: строка, копию которой нужно получить.
 * search: строка которое нужно поменять.
 * target: строка, на которую нужно поменять. */
export function replace(text, search, target) {
    isString(text, ' text');
    isString(search, ' search');
    isString(target, ' target');

    let  len = search.length;
    if (!text.includes(search)) return text;
    
    for (let i = 0; i < len; i += len) {
      i = indexOf(text, search);
      if (i !== -1) {
        text = substring(text, 0, i) + target + substring(text, i + len);
      } 
    }
    return text;
  }

/** Возвращает строку text, где все вхождения search поменяно на target.
 * text: строка, копию которой нужно получить.
 * search: строка которое нужно поменять.
 * target: строка, на которую нужно поменять. */
export function replaceAll(text, search, target) {
    isString(text, ' text');
    isString(search, ' search');
    isString(target, ' target');
    
    if (!text.includes(search)) return text;

    for (let i = text.indexOf(search); i > -1; i = text.indexOf(search, i + target.length)) {
      text = replace(text, search, target)
  }
    return text;
}
