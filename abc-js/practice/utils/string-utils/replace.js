function isString(text, parName) {
    if(typeof text !== 'string') throw Error (`argument${parName ?? ''} must be type of string`);
  }
/** Возвращает строку text, где первое вхождение search поменяно на target.
 * text: строка, копию которой нужно получить.
 * search: строка которое нужно поменять.
 * target: строка, на которую нужно поменять. */
export function replace(text, search, target) {
    isString(text, ' text');
    isString(search, ' search');
    isString(target, ' target');

    let  len = search.length;
    if (!text.includes(search)) return text;
    for (let i = 0; i < len; i++) {
      i = text.indexOf(search, i);
      let firstText = text.substring(0, i);
      let secondText = text.substring(i + len);
      if (i !== -1) {
        text = firstText + target + secondText;
        i += len;
      } 
    }
    return text;
  }

/** Возвращает строку text, где все вхождения search поменяно на target.
 * text: строка, копию которой нужно получить.
 * search: строка которое нужно поменять.
 * target: строка, на которую нужно поменять. */
export function replaceAll(text, search, target) {
    isString(text, ' text');
    isString(search, ' search');
    isString(target, ' target');
    if (!text.includes(search)) return text;
    let  len = search.length;
    let index = text.indexOf(search);
    while (index !== -1) {
        text = text.substr(0, index) + target + text.substr(index + len);
        index = text.indexOf(search, index + target.length);
    }
    return text;
}
