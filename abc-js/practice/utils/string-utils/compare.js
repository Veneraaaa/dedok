
/** возвращает булевый ответ равны ли параметры firstText и secondText. */
import { len } from "./len.js";
import { checkIsString } from "./common.js";

export function isEqual(firstText, secondText) {
}

/** возвращает true если аргументы не равны, и true в иных случаях. */
export function isNotEqual(firstText, secondText) {
    return !(isEqual(firstText, secondText));
}

/** возвращает булевый ответ больше ли параметр firstText чем secondText. */
export function isMore(firstText, secondText) {
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
