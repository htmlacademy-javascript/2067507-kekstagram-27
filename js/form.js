import { checkStringLength } from './util.js';

const HASTAG = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_HASH_COUNT = 5;
const TEXTAREA_MAX_LENGHT = 140;

const uploadForm = document.querySelector('.img-upload__form');
const hashtagInput = uploadForm.querySelector('.text__hashtags');


const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'error-text',
}
);

function validateTextarea(value) {
  return checkStringLength(value, TEXTAREA_MAX_LENGHT);
}

function prepareInputValue () {
  const hashtags = hashtagInput.value;
  const hashtagArray = hashtags.trim().split(' ');
  const copyHashtagArray = hashtagArray.map((element) => element.toLowerCase());

  return { copyHashtagArray, hashtagArray };
}

function hasDuplicates() {
  const { copyHashtagArray, hashtagArray} = prepareInputValue();
  return new Set(copyHashtagArray).size === hashtagArray.length;
}

function hasValidCount() {
  const { copyHashtagArray} = prepareInputValue();
  return copyHashtagArray.length <= MAX_HASH_COUNT;
}

function isValidHash () {
  const { copyHashtagArray} = prepareInputValue();
  return copyHashtagArray.every((item) => HASTAG.test(item));
}

pristine.addValidator(
  uploadForm.querySelector('.text__description'),
  validateTextarea,
  `Длина сообщения не должная быть больше ${TEXTAREA_MAX_LENGHT}`);

pristine.addValidator(hashtagInput, hasDuplicates, 'Хештеги не должны повторяться');
pristine.addValidator(hashtagInput, hasValidCount, 'Максимальное кол-во 5 хештегов');
pristine.addValidator(hashtagInput, isValidHash, 'Хэштег должен начинаться с # и состоять из букв и чисел');

uploadForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});

