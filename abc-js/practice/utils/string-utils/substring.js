import { len } from "./len.js"
import { checkStrCode } from "./common.js";
import { isInteger } from "../number-utils/is-integer.js";
/** Возвращает копию text начиная с индекса start до индекса end.
 * Символ с индексом end не включается в выборку.
 * Если start не передано, то будет выборка начнется с первого символа.
 * Если end не передано, то будет возвращено text до последнего символа*/
export function substring(text, start, end) {
    let lenText = len(text);
    
    start = start ?? 0;
    end = end ?? len(text);

    checkStrCode(text, start, end);

    let Symbols = '';
    for (let i = start; i < end; i++) {
        Symbols = Symbols + text[i];
    }
    return Symbols;
}