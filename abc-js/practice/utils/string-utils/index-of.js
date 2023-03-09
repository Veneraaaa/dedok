/** Выполняет поиск строки searchString в строке text
 * и возвращает первую найденную позицию.
 * Если в вхождение не найдено, то возвращает значение -1.
 * Параметр index задает начальную индекс с которой необходимо
 * начать поиск.*/
export function indexOf(text, searchString, index=0) {
  for (let i = 0; i < text.length; i++) {
   
    if (text[i] !== searchString) {
      return index++;
    }
    else {
        break;
    }
  }
}
