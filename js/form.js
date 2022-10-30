// import { checkStringLength } from "./util";

const uploadForm = document.querySelector('.img-upload__form');
const hashtagInput = uploadForm.querySelector('.text__hashtags');
const HASTAG = /^#[a-zа-яё0-9]{1,19}$/i;
const MAXHASH = 5;
const TEXTAREA_MAX = 140;


const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'error-text',
}
);
//не очень поняла как правильно использовать здесь функцию написанную раньше
function validateTextarea(value) {
  return value.length <= TEXTAREA_MAX;
}

function hasDuplicates() {
  const hashtags = hashtagInput.value;
  const hashtagArray = hashtags.trim().split(' ');
  const copyHashtagArray = hashtagArray.map((element) => element.toLowerCase());
  return new Set(copyHashtagArray).size === hashtagArray.length;
}

function hasValidCount() {
  const hashtags = hashtagInput.value;
  const hashtagArray = hashtags.trim().split(' ');
  const copyHashtagArray = hashtagArray.map((element) => element.toLowerCase());
  return copyHashtagArray.length <= MAXHASH;
}

function isValidHash () {
  const hashtags = hashtagInput.value;
  const hashtagArray = hashtags.trim().split(' ');
  const copyHashtagArray = hashtagArray.map((element) => element.toLowerCase());
  return copyHashtagArray.every((item) => HASTAG.test(item));
}

pristine.addValidator(
  uploadForm.querySelector('.text__description'),
  validateTextarea,
  `Длина сообщения не должная быть больше ${TEXTAREA_MAX}`);

pristine.addValidator(hashtagInput, hasDuplicates, 'Хештеги не должны повторяться');
pristine.addValidator(hashtagInput, hasValidCount, 'Максимальное кол-во 5 хештегов');
pristine.addValidator(hashtagInput, isValidHash, 'Хэштег должен начинаться с # и состоять из букв и чисел');

uploadForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});

