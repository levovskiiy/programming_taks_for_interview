/**
 *
 * @param {number} number
 */
const cases = (number) => {
  const div = number % 100;
  const lastDigit = number % 10;

  if (div >= 11 && div <= 19) {
    return `${number} компьютеров`;
  }

  if (lastDigit === 1) {
    return `${number} компьютер`;
  } else if (lastDigit >= 2 && lastDigit <= 4 && number < 100) {
    return `${number} компьютера`;
  }

  return `${number} компьютеров`;
};

for (let i = 0; i < 1049; i++) {
  console.log(cases(i));
}
