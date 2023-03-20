import { isEqual } from "./compare.js";
import { len } from "./len.js";
import { substring } from "./substring.js";
/** Выполняет поиск строки searchString в строке text
 * и возвращает первую найденную позицию.
 * Если в вхождение не найдено, то возвращает значение -1.
 * Параметр index задает начальную индекс с которой необходимо
 * начать поиск.*/
export function indexOf(text, searchString, index=0) {
    if (typeof text !== 'string') throw Error ('argument must be type of string');
    if (typeof searchString !== 'string') throw Error ('invalid searchString string');
    const lenText = len(text)
    const lenSearchStr = len(searchString)
    if (typeof index !== 'number' || !(index % 1 === 0) || lenText < index || index < 0) throw Error ('invalid index');
    if(text === '' || searchString === '') {return -1}
    
    for (let i = index; i <= lenText - lenSearchStr; i ++) {
        const textSubstr = substring(text, i, i + lenSearchStr);
        if (isEqual(textSubstr, searchString)) return i;
    }
    
return -1;
}
