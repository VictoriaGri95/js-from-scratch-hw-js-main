/* С помощью цикла while найдите факториал числа 10 и присвойте его переменной factorial

  Справка:
  Факториал числа 𝑛 (обозначается как 𝑛!)  — это произведение всех натуральных чисел от 1 до 𝑛 включительно.
  Например, факториал числа 3 это 1 * 2 * 3 (6).
*/

// your code
let factorial = 1;
let firstNaturalNumber = 1;
const LAST_NATURAL_NUMBER = 10;

while (firstNaturalNumber <= LAST_NATURAL_NUMBER) {
  factorial = factorial * firstNaturalNumber;
  firstNaturalNumber++
}
console.log(factorial)