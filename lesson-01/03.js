/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code
let sum = 0;
let firstNumber = 1;
const LAST_NUMBER = 20;

while (firstNumber < LAST_NUMBER) { // 1 < 20 - true // 2 < 20 - true
  // sum = sum + firstNumber;
  // firstNumber = firstNumber + (8 % 3);
  if (firstNumber % 2 !== 0) { // 1 не делится ли без остатка на 2 - true // false
    sum = sum + firstNumber;
  }
  firstNumber++;
}

console.log(sum)

