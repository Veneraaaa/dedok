import { reverse } from "./reverse.js";
import { substring } from "./substring.js";
import { len } from "./len.js";

const TRIM_SYMBOLS = ' \n\t\v'; 
function isString(text, parName) {
  if(typeof text !== 'string') throw Error (`argument${parName ?? ''} must be type of string`);
}
/** Возвращает копию строки с удаленными символами со строки trimSymbols в начале строки.
 * По умолчанию удаляются символы пробела, табуляции и перевода строки.*/
export function trimStart(text, trimSymbols=TRIM_SYMBOLS) {
    isString(text, ' text');
    isString(trimSymbols, ' trimSymbols');
    for (let i = 0; i < len(text); i++) {
    if (!trimSymbols.includes(text[i])) {
      return substring(text, i);
    }
  } 
  return '';
}

/** Возвращает копию строки с удаленными символами со строки trimSymbols в конце строки.
 * По умолчанию удаляются символы пробела, табуляции и перевода строки.*/
export function trimEnd(text, trimSymbols=TRIM_SYMBOLS) {
  isString(text, ' text');
  isString(trimSymbols, ' trimSymbols');
  return reverse(trimStart(reverse(text), trimSymbols));
}

/** Возвращает копию строки с удаленными символами
 * со строки trimSymbols в начале и конце строки.
 * По умолчанию удаляются символы пробела, табуляции и перевода строки.*/
export function trim(text, trimSymbols=TRIM_SYMBOLS) {
  isString(text, ' text');
  isString(trimSymbols, ' trimSymbols');
  return trimStart(trimEnd(text, trimSymbols), trimSymbols);
}
