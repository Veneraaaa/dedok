
/** возвращает булевый ответ равны ли параметры firstText и secondText. */
import { len } from "./len.js";
import { checkError } from "./common.js";

export function isEqual(firstText, secondText) {
    checkError(firstText, secondText)

    if (len(firstText) !== len(secondText)) return false;
    const cycleLength = len(firstText) < len(secondText) ? len(firstText) : len(secondText);

    for (let index = 0; index < cycleLength; index++) {
        console.log(`for --- index: ${index}; fChar: ${firstText[index]}; sChar: ${secondText[index]}`)
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
    checkError(firstText, secondText);

    let lenFirstText = len(firstText);
    let lenSecondText = len(secondText);
    for (let index = 0; index < lenFirstText; index++) {
        if (index === lenSecondText)  {return true;}
        else if (firstText[index] > secondText[index]) {return true;}
        else if (firstText[index] < secondText[index]) {return false;}
    } return false;
} 

/** возвращает булевый ответ меньше ли параметр firstText чем secondText. */
export function isLess(firstText, secondText) {
    if (isEqual(firstText, secondText)) {return false;}
    return (!isMore(firstText, secondText))
}

/** возвращает булевый ответ больше или равно ли параметр firstText чем secondText. */
export function isMoreOrEqual(firstText, secondText) {
    return(!isLess(firstText, secondText));
}

/** возвращает булевый ответ меньше или равно ли параметр firstText чем secondText. */
export function isLessOrEqual(firstText, secondText) {
   return(!isMore(firstText, secondText))
}
