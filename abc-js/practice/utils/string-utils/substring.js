/** Возвращает копию text начиная с индекса start до индекса end.
 * Символ с индексом end не включается в выборку.
 * Если start не передано, то будет выборка начнется с первого символа.
 * Если end не передано, то будет возвращено text до последнего символа*/
import { len } from "./len.js"
export function substring(text, start = 0, end = len(text)) {
    if (typeof start !== 'number' || start % 1 !== 0 || start < 0) throw Error('invalid start index');
    if (typeof end !== 'number' || end % 1 !== 0 || end < 0) throw Error('invalid end index');
    if (end > len(text)) throw Error('invalid end index');
    if (start > end) throw Error('invalid start and end index');

    let resultText = '';
    for (let i = start; i < end; i++) {
      resultText += text[i];
    }
    return resultText;
  }