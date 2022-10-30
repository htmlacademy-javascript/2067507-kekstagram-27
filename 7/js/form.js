const uploadForm = document.querySelector('.img-upload__form');
const hashtagInput = uploadForm.querySelector('.text__hashtags');
const hashtag = /^#[a-zа-яё0-9]{1,19}$/i;
const maxHash = 5;

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'error-text',
});

function validateTextarea(value) {
  return value.length <= 140;
}

function validateHash() {
  const hashtags = hashtagInput.value;
  const hashtagArray = hashtags.split(' ');

  const copyHashtagArray = hashtagArray.map((element) => element.toLowerCase());

  function hasDuplicates(arr) {
    return new Set(copyHashtagArray).size !== arr.length;
  }

  if ((copyHashtagArray.length <= maxHash) && (!hasDuplicates(copyHashtagArray))) {
    return copyHashtagArray.every((item) => hashtag.test(item));
  }
}

pristine.addValidator(
  uploadForm.querySelector('.text__description'),
  validateTextarea);

pristine.addValidator(
  uploadForm.querySelector('.text__hashtags'),
  validateHash);


uploadForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});

