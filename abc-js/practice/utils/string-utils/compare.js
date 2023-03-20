
/** возвращает булевый ответ равны ли параметры firstText и secondText. */
import { len } from "./len.js";
import { checkIsString } from "./common.js";

export function isEqual(firstText, secondText) {
    checkIsString(secondText);
    checkIsString(firstText);
    const lenFirstText = len(firstText);
    const lenSecondText = len(secondText);

    if (lenFirstText !== lenSecondText) return false;
    const cycleLength = lenFirstText < lenSecondText ? lenFirstText : lenSecondText;

    for (let index = 0; index < cycleLength; index++) {
        if (firstText[index] !== secondText[index]) return false;
    }
    return true;
}

/** возвращает true если аргументы не равны, и true в иных случаях. */
export function isNotEqual(firstText, secondText) {
    return !(isEqual(firstText, secondText));
}

/** возвращает булевый ответ больше ли параметр firstText чем secondText. */
export function isMore(firstText, secondText) {
    checkIsString(firstText)
    checkIsString(secondText);

    const lenFirstText = len(firstText);
    const lenSecondText = len(secondText);
    for (let index = 0; index < lenFirstText; index++) {
        if (index === lenSecondText)  {return true;}
        else if (firstText[index] > secondText[index]) {return true;}
        else if (firstText[index] < secondText[index]) {return false;}
    } 
    return false;
}

/** возвращает булевый ответ меньше ли параметр firstText чем secondText. */
export function isLess(firstText, secondText) {
    return (!isEqual(firstText, secondText) && !isMore(firstText, secondText))
}

/** возвращает булевый ответ больше или равно ли параметр firstText чем secondText. */
export function isMoreOrEqual(firstText, secondText) {
    return(!isLess(firstText, secondText));
}

/** возвращает булевый ответ меньше или равно ли параметр firstText чем secondText. */
export function isLessOrEqual(firstText, secondText) {
   return(!isMore(firstText, secondText))
}
