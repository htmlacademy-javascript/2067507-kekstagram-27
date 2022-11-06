import {isEscapeKey} from './util.js';
import { resetScale } from './scale.js';
import { resetEffects } from './filter.js';

const inputUpload = document.querySelector('#upload-file');
const photoEditorModal = document.querySelector('.img-upload__overlay');
const escButton = document.querySelector('.img-upload__cancel');
const body = document.querySelector('body');

inputUpload.addEventListener('change', () => {
  openEditor();
});

const onModalOnEsc = (evt) => {
  if (isEscapeKey(evt) && document.activeElement.type !== 'text' && document.activeElement.type !== 'textarea') {
    evt.preventDefault();
    closeEditor();
  }
};

const onModalOnButton = (evt) => {
  evt.preventDefault();
  closeEditor();
};

function openEditor () {
  photoEditorModal.classList.remove('hidden');
  body.classList.add('modal-open');
  resetScale();
  resetEffects();

  document.addEventListener('keydown', onModalOnEsc);
  escButton.addEventListener('click', onModalOnButton);
}

function closeEditor () {
  photoEditorModal.classList.add('hidden');
  body.classList.remove('modal-open');
  inputUpload.value = '';

  document.removeEventListener('keydown', onModalOnEsc);
  escButton.removeEventListener('click', onModalOnButton);
}


