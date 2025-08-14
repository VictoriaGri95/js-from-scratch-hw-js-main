// С помощью цикла while найдите сумму чисел от 1 до 20
// Результат присвойте переменной sum

// your code
let sum = 0;
let firstNumber = 1;
const LAST_NUMBER = 20;

while (firstNumber <= LAST_NUMBER) {
  sum = sum + firstNumber;
  firstNumber++;
}
console.log(sum);