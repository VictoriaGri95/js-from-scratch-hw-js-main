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
function includesElement(array, element) {
  for (let i = 0; i < array.length; i++) {
    let item = array[i]
    // если элемент есть в массиве, выводим True
    if (item === element) {
      return true
    }
  }
  return false
}

function findCommonElements(array1, array2) {
  let commonArray = []
  for (let i = 0; i < array1.length; i++) {
    let item = array1[i]
    if (includesElement(array2, item) && !includesElement(commonArray, item)) {
      commonArray.push(item)
    }
  }
  return commonArray
}
console.log(findCommonElements([6, 2, 3, 5, 7, 8, 8], [2, 3, 4, 5, 6, 8]))
console.log(findCommonElements([6, 2, 3, 5], [2, 3, 4, 5, 6]))
console.log(findCommonElements([1, 2, 3, 4], [5, 6, 7, 8, 9]))
console.log(findCommonElements(['apple', 'banana', 'cherry'], ['banana']))