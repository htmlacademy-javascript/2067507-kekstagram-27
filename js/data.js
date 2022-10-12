import {getRandomPositiveInteger} from './util.js';

//Константы
const DESCRIPTION = 'Описания пока нет!';

const NAMES = ['Аня', 'Петя', 'Слава', 'Федя', 'Вася', 'Катя'];

const MESSAGES = ['Всё отлично!',
  'В целом всё неплохо. Но не всё',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

//колво объектов
const OBJ_NUMBER = 25;
const ID_NUMBER = OBJ_NUMBER;

const id = createArrayID(ID_NUMBER);
const url = createArrayURL(id);

function createArrayID(param) {
  const identifiers = [];
  for (let i = 1; i <= param; i++) {
    identifiers.push(i);
  }
  return identifiers;
}

function createArrayURL(param) {
  const urls = [];
  for (const number of param) {
    urls.push(`photos/${number}.jpg`);
  }
  return urls;
}

function getRandom(array) {
  const lengthArray = array.length - 1;
  return array[getRandomPositiveInteger(1, lengthArray)];
}

const createComments = () => {

  const comments = [];
  for (let i = 1; i < getRandomPositiveInteger(1, 5); i++) {
    comments.push({
      avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
      message: getRandom(MESSAGES),
      name: getRandom(NAMES),
      id: i
    });
  }
  return comments;
};


const createPhotoDesctiption = (param) => {
  const objects = [];
  for (let i = 0; i < param; i++) {
    objects.push({
      id: id[i],
      url: url[i],
      description: DESCRIPTION,
      likes: getRandomPositiveInteger(15, 200),
      comments: createComments()
    });
  }
  return objects;
};

const createPhotoDesctiptions = createPhotoDesctiption(OBJ_NUMBER);

export {createPhotoDesctiptions};
