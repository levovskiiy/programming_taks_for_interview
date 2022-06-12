/**
 *
 * @param {Array} array1
 * @param {Array} array2
 */
const findDuplicates = (array1, array2) => {
  const result = [];

  const countValuesInFirstArray = array1.reduce((acc, value, idx) => {
    if (acc[value]) {
      acc[value] += 1;
    } else {
      acc[value] = 1;
    }
    return acc;
  }, {});

  const countValuesInSecondArray = array2.reduce((acc, value) => {
    if (acc[value]) {
      acc[value] += 1;
    } else {
      acc[value] = 1;
    }

    return acc;
  }, {});

  const longArray = Math.max(array1.length, array2.length) === array1.length ? array1 : array2;
  longArray.forEach((value) => {
    if (countValuesInFirstArray[value] >= 2 && countValuesInSecondArray[value] >= 2 && !result.includes(value)) {
      result.push(value);
    }
  });

  return result.sort((a, b) => a - b);
};

console.log(findDuplicates([7, 17, 1, 9, 1, 17, 56, 56, 23], [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]));
