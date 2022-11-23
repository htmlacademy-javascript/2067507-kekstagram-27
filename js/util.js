import { closeEditor, resetEditor, openEditorOnErr } from './upload.js';
const errTemplate = document.querySelector('#error').content;
const errBlock = errTemplate.querySelector('.error');
const body = document.querySelector('body');

const okTemplate = document.querySelector('#success').content;
const okBlock = okTemplate.querySelector('.success');
const photoElementErr = errBlock.cloneNode(true);
const photoElementOk = okBlock.cloneNode(true);
const sortBlock = document.querySelector('.img-filters');

const checkStringLength = (string, length) => string.length <= length;

const isEscapeKey = (evt) => evt.key === 'Escape';

const onMessageOnEsc = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    if(document.querySelector('.success')) {
      onHideMessageOk();
    }
    else {
      onHideMessageErr();
    }
  }
};

const onWindowClick = (evt) => {
  if (evt.target === document.querySelector('.success')) {
    onHideMessageOk();
  } else if (evt.target === document.querySelector('.error')) {
    onHideMessageErr();
  }
};

const showErrUpload = () => {
  const photoFragment = document.createDocumentFragment();
  photoFragment.append(photoElementErr);
  body.append(photoFragment);
  const errorButtonErr = photoElementErr.querySelector('.error__button');
  closeEditor();
  body.style.overflow = 'hidden';
  errorButtonErr.addEventListener('click', onHideMessageErr);
  document.addEventListener('keydown', onMessageOnEsc);
  body.addEventListener('click', onWindowClick);
};

function onHideMessageErr () {
  openEditorOnErr();
  const errorButtonErr = photoElementErr.querySelector('.error__button');
  errorButtonErr.removeEventListener('click', onHideMessageErr);
  document.removeEventListener('keydown', onMessageOnEsc);
  body.style.overflow = 'auto';
  photoElementErr.remove();
}

function onHideMessageOk () {
  const successButtonOk = photoElementOk.querySelector('.success__button');
  successButtonOk.removeEventListener('click', onHideMessageOk);
  document.removeEventListener('keydown', onMessageOnEsc);
  body.removeEventListener('click', onWindowClick);
  body.style.overflow = 'auto';
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
  successButtonOk.addEventListener('click', onHideMessageOk);
  document.addEventListener('keydown', onMessageOnEsc);
  body.addEventListener('click', onWindowClick);
};

const getError = () => {
  const div = document.createElement('div');
  div.classList.add('error-loading');
  div.textContent = 'Ошибка при загрузке файлов';
  body.append(div);
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const getRandomPhotos = (array, quantity) => {
  const newPhotos = [];

  const createRandomIndex = () => {
    const index = Math.floor(Math.random() * array.length);
    if(newPhotos.includes(array[index])) {
      return createRandomIndex();
    }
    return index;
  };

  for (let i = 0; i < quantity; i++) {
    newPhotos.push(array[createRandomIndex()]);
  }
  return newPhotos;
};

const sortingGetVisible = () => {
  sortBlock.classList.remove('img-filters--inactive');
};

export {checkStringLength, isEscapeKey, showErrUpload, showOkUpload, getError, sortingGetVisible, debounce, getRandomPhotos};

