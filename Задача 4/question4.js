const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  if (number === 2) {
    return true;
  }

  const maxDividors = Math.sqrt(number) + 1;

  for (let i = 2; i < maxDividors; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};
