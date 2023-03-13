const TRIM_SYMBOLS = ' \n\t\v'; 
/** Возвращает копию строки с удаленными символами со строки trimSymbols в начале строки.
 * По умолчанию удаляются символы пробела, табуляции и перевода строки.*/
export function trimStart(text, trimSymbols=TRIM_SYMBOLS) {
    let start = 0;
    for (let i = 0; i < text.length; i++) {
    if (text[i] !== trimSymbols[i]) {
      start = i;
      break;
    }
  } 
  return text.substring(start);
}

/** Возвращает копию строки с удаленными символами со строки trimSymbols в конце строки.
 * По умолчанию удаляются символы пробела, табуляции и перевода строки.*/
export function trimEnd(text, trimSymbols=TRIM_SYMBOLS) {
}

/** Возвращает копию строки с удаленными символами
 * со строки trimSymbols в начале и конце строки.
 * По умолчанию удаляются символы пробела, табуляции и перевода строки.*/
export function trim(text, trimSymbols=TRIM_SYMBOLS) {
}
