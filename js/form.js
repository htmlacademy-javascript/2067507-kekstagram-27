import { checkStringLength } from './util.js';
import { sendData } from './fetch.js';

const HASTAG = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_HASH_COUNT = 5;
const TEXTAREA_MAX_LENGHT = 140;

const uploadForm = document.querySelector('.img-upload__form');
const hashtagInput = uploadForm.querySelector('.text__hashtags');
const body = document.querySelector('body');
const savingTemplate = document.querySelector('#messages').content;


const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'error-text',
}
);

const validateTextarea = (value) => checkStringLength(value, TEXTAREA_MAX_LENGHT);

const prepareInputValue = () => {
  const hashtags = hashtagInput.value;
  const hashtagArray = hashtags.trim().split(' ');
  const copyHashtagArray = hashtagArray.map((element) => element.toLowerCase());

  return { copyHashtagArray, hashtagArray };
};

const checkDuplicates = () => {
  const { copyHashtagArray, hashtagArray } = prepareInputValue();
  return new Set(copyHashtagArray).size === hashtagArray.length;
};

const checkValidCount = () => {
  const { copyHashtagArray } = prepareInputValue();
  return copyHashtagArray.length <= MAX_HASH_COUNT;
};

const checkValidHash = () => {
  if (hashtagInput.value !== '') {
    return hashtagInput.value.split(' ').every((hastag) => HASTAG.test(hastag));
  }
  return true;
};

pristine.addValidator(
  uploadForm.querySelector('.text__description'),
  validateTextarea,
  `Длина сообщения не должная быть больше ${TEXTAREA_MAX_LENGHT}`);

pristine.addValidator(hashtagInput, checkDuplicates, 'Хештеги не должны повторяться', 1, true);
pristine.addValidator(hashtagInput, checkValidCount, 'Максимальное кол-во 5 хештегов', 1, true);
pristine.addValidator(hashtagInput, checkValidHash, '- хэштег должен начинаться с #,<br> - состоять из букв и чисел, <br> - максимальная длина хештега 20 символов', 1, true);
const savingPhoto = () => {
  const uploadMessage = savingTemplate.querySelector('.img-upload__message');
  const photoFragment = document.createDocumentFragment();
  const photoElement = uploadMessage.cloneNode(true);
  photoFragment.append(photoElement);
  body.append(photoFragment);
};


const unSavingPhoto = () => {
  const uploadMessage = document.querySelector('.img-upload__message');
  body.removeChild(uploadMessage);
};

const setUserFormSubmit = (onSuccess, onError) => {

  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (pristine.validate()) {
      savingPhoto();
      const formData = new FormData(evt.target);
      sendData(() => {
        unSavingPhoto();
        onSuccess();
      }, () => {
        unSavingPhoto();
        onError();
      },
      formData);
    }
  });
};

const resetValidation = () => {
  pristine.reset();
};

export { setUserFormSubmit, savingPhoto, unSavingPhoto, resetValidation };
