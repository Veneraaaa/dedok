import { len } from "./len.js"
import { checkStrCode } from "./common.js";
/** Возвращает копию text начиная с индекса start до индекса end.
 * Символ с индексом end не включается в выборку.
 * Если start не передано, то будет выборка начнется с первого символа.
 * Если end не передано, то будет возвращено text до последнего символа*/
export function substring(text, start, end) {
    let lenText = len(text);
    if (start === undefined && end === undefined) return (text);

    start = start ?? 0;
    end = end ?? len(text);

    checkStrCode(text, start, end);

    let newText = '';
    for (let i = start; i < end; i++) {
            newText = newText + text[i];
    }
    return(newText);
}
