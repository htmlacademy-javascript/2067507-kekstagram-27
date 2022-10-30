import {createPhotoDesctiptions} from './data.js';
import { miniContainer } from './small-photo.js';
import {isEscapeKey} from './util.js';
const fullModal = document.querySelector('.big-picture');
const escButton = fullModal.querySelector('.cancel');
const socialComments = document.querySelector('.social__comment-count');
const commentsLoad = document.querySelector('.comments-loader');
const body = document.querySelector('body');
const photoDescription = document.querySelector('.social__caption');
const urlBigPic = document.querySelector('.big-picture__img img');
const likesCount = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');
const photoComments = document.querySelector('.social__comments');
const socialComment = document.querySelector('.social__comment');

const generateFullSize = function (photoObject) {
  photoDescription.textContent = photoObject.description;
  urlBigPic.src = photoObject.url;
  likesCount.textContent = String(photoObject.likes);
  commentsCount.textContent = String(photoObject.comments.length);

  photoComments.innerHTML = '';

  photoObject.comments.forEach(((item) => {
    const socialCommentClone = socialComment.cloneNode(true);
    const img = socialCommentClone.querySelector('img');
    img.src = item.avatar;
    img.alt = item.name;
    socialCommentClone.querySelector('p').textContent = item.message;

    photoComments.appendChild(socialCommentClone);
  }));
};

const onModalOnEsc = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

const onModalOnButton = (evt) => {
  evt.preventDefault();
  closeModal();
};

function closeModal () {
  body.classList.remove('modal-open');
  fullModal.classList.add('hidden');
  document.removeEventListener('keydown', onModalOnEsc);
  escButton.removeEventListener('click', onModalOnButton);
}

function openModal () {
  body.classList.add('modal-open');
  fullModal.classList.remove('hidden');
  document.addEventListener('keydown', onModalOnEsc);
  escButton.addEventListener('click', onModalOnButton);
}

socialComments.classList.add('hidden');
commentsLoad.classList.add('hidden');

miniContainer.addEventListener('click', (evt) => {
  // evt.preventDefault();

  const currentPicture = evt.target.closest('.picture');
  if (currentPicture) {
    const currentObject = createPhotoDesctiptions.find((item) => item.id === Number(currentPicture.dataset.id));


    openModal();
    generateFullSize(currentObject);
  }
});

export {openModal, closeModal};
