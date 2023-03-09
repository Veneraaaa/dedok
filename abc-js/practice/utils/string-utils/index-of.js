import {isEqual} from './compare.js' 
/** Выполняет поиск строки searchString в строке text
 * и возвращает первую найденную позицию.
 * Если в вхождение не найдено, то возвращает значение -1.
 * Параметр index задает начальную индекс с которой необходимо
 * начать поиск.*/
export function indexOf(text, searchString, index=0) {
    if (typeof text !== 'string') throw Error ('argument must be type of string');
    if (typeof searchString !== 'string') throw Error ('invalid searchString string');
    if (typeof index !== 'number' || !(index%1===0) || text.length < index || index<0) throw Error ('invalid index');

    if(text !== '' && searchString !== ''){
        for (let i = index; i <= text.length - searchString.length; i ++) {
            const textSubstr = text.substring(i, i + searchString.length);
            if (isEqual(textSubstr, searchString)) return i;
        }
    }
return -1;
}
