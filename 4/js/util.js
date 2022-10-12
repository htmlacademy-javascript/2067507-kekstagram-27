//Функция для вычисления рандомного числа
function getRandomPositiveInteger(a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }

  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

getRandomPositiveInteger();

//Функция для вычисления макс длины строки
function checkStringLength(string, length) {
  return string.length <= length;
}

checkStringLength('ghb', 4);

export {getRandomPositiveInteger, checkStringLength};

