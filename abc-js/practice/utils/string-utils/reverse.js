/** Возвращает "развернутую" копию text */
export function reverse(text) {
if(typeof text !== 'string') throw Error('argument must be type of string'); 

    let newStr = '';
    for (let i = text.length - 1; i >= 0; i--) {
      newStr += text[i];
    }
    return newStr;
}
