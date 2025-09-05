/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/
import {includesElement} from "./01.js"

function findCommonElements(array1, array2) {
  let commonArray = []
  let longestArray = [];
  let  shortArray = [];
  if (array1.length > array2.length) {
    longestArray = array1
    shortArray = array2
  } else {
    longestArray = array2
    shortArray = array1
  }
  for (let i = 0; i < longestArray.length; i++) {
    let item = longestArray[i]
    if (includesElement(shortArray, item)) {
      commonArray.push(item)
    }
  }
  return commonArray
}

// console.log(findCommonElements(['apple', 'banana'], ['orange', 'melon']))
// console.log(findCommonElements([1, 2, 3], [2, 3, 4, 5, 6]))