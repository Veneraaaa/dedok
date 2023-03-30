import { checkIsString } from "./common.js";
export function repeat(text, count = 1) {
    checkIsString(text);
    if (typeof count !== 'number' || count % 1 !== 0 || count < 0) throw Error ('invalid count');

    let retValue = '';
    for (let i = 0; i < count; i++) {
        retValue += text;
    }
    return retValue;
}
