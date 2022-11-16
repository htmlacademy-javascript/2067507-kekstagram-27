import {isEscapeKey} from './util.js';
import { resetScale } from './scale.js';
import { resetEffects } from './filter.js';

const inputUpload = document.querySelector('#upload-file');
const photoEditorModal = document.querySelector('.img-upload__overlay');
const escButton = document.querySelector('.img-upload__cancel');
const body = document.querySelector('body');

const hashtagInput = document.querySelector('.text__hashtags');
const textFieldInput = document.querySelector('.text__description');
// console.log(textFieldInput)

const radios = document.querySelectorAll('.effects__radio');
const defaultChecked = radios[0];


inputUpload.addEventListener('change', () => {
  openEditor();
});

const onModalOnEsc = (evt) => {
  if (isEscapeKey(evt) && document.activeElement.type !== 'text' && document.activeElement.type !== 'textarea') {
    evt.preventDefault();
    closeEditor();
    resetEditor();
  }
};

const onModalOnButton = (evt) => {
  evt.preventDefault();
  closeEditor();
  resetEditor();
};

function openEditorOnErr () {
  photoEditorModal.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onModalOnEsc);
  escButton.addEventListener('click', onModalOnButton);
}

function openEditor () {
  resetScale();
  resetEffects();
  openEditorOnErr();
}

function closeEditor () {
  photoEditorModal.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onModalOnEsc);
  escButton.removeEventListener('click', onModalOnButton);
}

function resetEditor () {
  inputUpload.value = '';
  defaultChecked.checked = 'true';
  hashtagInput.value = '';
  textFieldInput.value = '';
}

export {openEditor, closeEditor, resetEditor, openEditorOnErr};
