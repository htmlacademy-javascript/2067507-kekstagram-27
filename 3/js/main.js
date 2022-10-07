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

//Пробовала делать поразному в плане комментариев, получилось, что Айди уникальные на каждом фото, но не уникальные впринципе.

//колво объектов
const OBJ_NUMBER = 25;
const ID_NUMBER = 25;

function getID() {
  const id = [];
  for (let i = 1; i <= ID_NUMBER; i++) {
    id.push(i);
  }
  return id;
}

const ID = getID();

function getURL() {
  const url = [];
  for (const number of ID) {
    url.push(`photos/${number}.jpg`);
  }
  return url;
}

const URL = getURL(ID);


const DESCRIPTION = 'Описания пока нет!';

const names = ['Аня', 'Петя', 'Слава', 'Федя', 'Вася', 'Катя'];

const messages = ['Всё отлично!',
  'В целом всё неплохо. Но не всё',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
function getRandom(array) {
  const i = array.length - 1;
  return array[getRandomPositiveInteger(1, i)];
}

const getComments = () => {

  const obj = [];
  for (let i = 1; i < getRandomPositiveInteger(1, 5); i++) {
    obj.push({
      avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
      message: getRandom(messages),
      name: getRandom(names),
      id: i
    });
  }
  return obj;
};


const createObjects = () => {
  const obj = [];
  for (let i = 0; i < OBJ_NUMBER; i++) {
    obj.push({
      id: ID[i],
      url: URL[i],
      description: DESCRIPTION,
      likes: getRandomPositiveInteger(15, 200),
      comments: getComments()
    });
  }
  return obj;
};

createObjects(OBJ_NUMBER);

