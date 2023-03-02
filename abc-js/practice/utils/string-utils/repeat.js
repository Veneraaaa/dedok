import { checkRepeat } from "./common.js";
export function repeat(text, count = 1) {
    checkRepeat(text, count); 

    let retValue = '';
    for (let i = 0; i < count; i++) {
        retValue += text;
    }
    return retValue;
}
