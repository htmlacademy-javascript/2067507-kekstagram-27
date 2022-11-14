import { closeEditor } from './upload.js';

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

const isEscapeKey = (evt) => evt.key === 'Escape';


const errTemplate = document.querySelector('#error').content;
const errBlock = errTemplate.querySelector('.error');
const body = document.querySelector('body');

const okTemplate = document.querySelector('#success').content;
const okBlock = okTemplate.querySelector('.success');
// console.log(okTemplate)

// console.log(errorButtonOk)

const showErrUpload = () => {
  //нужен ли каждому свой фрагмент?
  const photoFragment = document.createDocumentFragment();
  const photoElement = errBlock.cloneNode(true);
  photoFragment.append(photoElement);
  body.append(photoFragment);
  const errorButtonOk = photoElement.querySelector('.error__button');
  //как удалить обработчик, если вынести photoElement не получится
  errorButtonOk.addEventListener('click', () => {
    photoElement.classList.add('hidden');
  });
};

const showOkUpload = () => {
  const photoFragment = document.createDocumentFragment();
  const photoElement = okBlock.cloneNode(true);
  photoFragment.append(photoElement);
  body.append(photoFragment);
  const successButtonOk = photoElement.querySelector('.success__button');
  successButtonOk.addEventListener('click', () => {
    closeEditor();
    photoElement.classList.add('hidden');
  });
};
//забыла как прикрепить к началу боди
const onErrorGet = () => {
  const div = document.createElement('div');
  div.classList.add('error-loading');
  div.textContent = 'Ошибка при загрузке файлов';
  body.append(div);
};

onErrorGet();

export {getRandomPositiveInteger, checkStringLength, isEscapeKey, showErrUpload, showOkUpload, onErrorGet};

