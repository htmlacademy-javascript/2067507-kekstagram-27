import { closeEditor, resetEditor, openEditorOnErr } from './upload.js';

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
const photoElementErr = errBlock.cloneNode(true);
const photoElementOk = okBlock.cloneNode(true);


const onMessageOnEsc = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    if(document.querySelector('.success')) {
      hideMessageOk();
    }
    else {
      hideMessageErr();
    }
  }
};

const onWindowClick = (evt) => {
  if (evt.target === document.querySelector('.success')) {
    hideMessageOk();
  } else if (evt.target === document.querySelector('.error')) {
    hideMessageErr();
  }
};

const showErrUpload = () => {
  const photoFragment = document.createDocumentFragment();
  photoFragment.append(photoElementErr);
  body.append(photoFragment);
  const errorButtonErr = photoElementErr.querySelector('.error__button');
  closeEditor();
  body.style.overflow = 'hidden';
  errorButtonErr.addEventListener('click', hideMessageErr);
  document.addEventListener('keydown', onMessageOnEsc);
  body.addEventListener('click', onWindowClick);
};

function hideMessageErr () {
  openEditorOnErr();
  const errorButtonErr = photoElementErr.querySelector('.error__button');
  errorButtonErr.removeEventListener('click', hideMessageErr);
  document.removeEventListener('keydown', onMessageOnEsc);
  photoElementErr.remove();
}

function hideMessageOk () {
  const successButtonOk = photoElementOk.querySelector('.success__button');
  successButtonOk.removeEventListener('click', hideMessageOk);
  document.removeEventListener('keydown', onMessageOnEsc);
  body.removeEventListener('click', onWindowClick);
  photoElementOk.remove();
}

const showOkUpload = () => {
  const photoFragment = document.createDocumentFragment();
  photoFragment.append(photoElementOk);
  body.append(photoFragment);
  body.style.overflow = 'hidden';
  const successButtonOk = photoElementOk.querySelector('.success__button');
  closeEditor();
  resetEditor();
  successButtonOk.addEventListener('click', hideMessageOk);
  document.addEventListener('keydown', onMessageOnEsc);
  body.addEventListener('click', onWindowClick);
};

const onErrorGet = () => {
  const div = document.createElement('div');
  div.classList.add('error-loading');
  div.textContent = 'Ошибка при загрузке файлов';
  body.append(div);
};


export {getRandomPositiveInteger, checkStringLength, isEscapeKey, showErrUpload, showOkUpload, onErrorGet};

