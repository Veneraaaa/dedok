import { reverse } from "./reverse.js";

const TRIM_SYMBOLS = ' \n\t\v'; 
function isString(text, parName) {
  if(typeof text !== 'string') throw Error (`argument${parName ?? ''} must be type of string`);
}
/** Возвращает копию строки с удаленными символами со строки trimSymbols в начале строки.
 * По умолчанию удаляются символы пробела, табуляции и перевода строки.*/
export function trimStart(text, trimSymbols=TRIM_SYMBOLS) {
    isString(text, ' text');
    isString(trimSymbols, ' trimSymbols');
    for (let i = 0; i < text.length; i++) {
    if (!trimSymbols.includes(text[i])) {
      return text.substring(i);
    }
  } 
  return '';
}

/** Возвращает копию строки с удаленными символами со строки trimSymbols в конце строки.
 * По умолчанию удаляются символы пробела, табуляции и перевода строки.*/
export function trimEnd(text, trimSymbols=TRIM_SYMBOLS) {
  if(typeof trimSymbols !== 'string') throw Error ('argument trimSymbols must be type of string');
  if (typeof text !== 'string') throw Error ('argument text must be type of string');
  return reverse(trimStart(reverse(text), trimSymbols));
}

/** Возвращает копию строки с удаленными символами
 * со строки trimSymbols в начале и конце строки.
 * По умолчанию удаляются символы пробела, табуляции и перевода строки.*/
export function trim(text, trimSymbols=TRIM_SYMBOLS) {
  if(typeof trimSymbols !== 'string') throw Error ('argument trimSymbols must be type of string');
  if (typeof text !== 'string') throw Error ('argument text must be type of string');
  return trimStart(trimEnd(text, trimSymbols), trimSymbols);

}
