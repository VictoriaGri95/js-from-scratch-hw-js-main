/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code
let sum = 0;
let firstNumber = 1;
const LAST_NUMBER = 20;

while (firstNumber < LAST_NUMBER) {
  sum = sum + firstNumber;
  firstNumber = firstNumber + (8 % 3) // должно увеличивать на 2 (в скобках 2 надо)
}

console.log(sum)