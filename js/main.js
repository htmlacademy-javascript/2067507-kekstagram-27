//Функция, возвращающая цельное число
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min >= max) {
    const newMin = min;
    min = max;
    max = newMin;
  }
  if (min < 0 || max < 0) {
    return NaN;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Удалить после
getRandom(10, 2);

//Проверка длины строки

function checkLength (text, length) {
  return text.length <= length;
}

checkLength('Прив', 59);

//Изначально я написала функцию вот так, но она не работает, помоги разобраться почему
function maxLength(text, length) {
  if (text.length <= length) {
    return true;
  }
  else {
    return false;
  }
}

maxLength('', 100);
