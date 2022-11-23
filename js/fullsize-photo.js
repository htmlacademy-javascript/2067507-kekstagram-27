import { picturesContainer } from './small-photo.js';
import {isEscapeKey} from './util.js';

const STEP_COUNT = 5;

const fullModal = document.querySelector('.big-picture');
const escButton = fullModal.querySelector('.cancel');
const body = document.querySelector('body');
const photoDescription = document.querySelector('.social__caption');
const urlBigPic = document.querySelector('.big-picture__img img');
const likesCount = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');
const photoComments = document.querySelector('.social__comments');
const socialComment = document.querySelector('.social__comment');
const loadButton = document.querySelector('.social__comments-loader');
const commentsLoaded = document.querySelector('.comments-loaded');

let renderedComments = 0;
let comments = [];

const hideLoadButton = () => {
  if (renderedComments === comments.length) {
    loadButton.classList.add('hidden');
  } else {
    loadButton.classList.remove('hidden');
  }
};

const generateComments = (arrayOfFive) => {
  arrayOfFive.forEach((item) => {
    const socialCommentClone = socialComment.cloneNode(true);
    const img = socialCommentClone.querySelector('img');
    img.src = item.avatar;
    img.alt = item.name;
    socialCommentClone.querySelector('p').textContent = item.message;

    renderedComments++;
    photoComments.appendChild(socialCommentClone);
  });
  commentsLoaded.textContent = renderedComments;
  hideLoadButton();
};

const generateFullSize = (photoObject) => {
  photoDescription.textContent = photoObject.description;
  urlBigPic.src = photoObject.url;
  likesCount.textContent = String(photoObject.likes);
  commentsCount.textContent = String(photoObject.comments.length);

  photoComments.innerHTML = '';

  comments = photoObject.comments;

  generateComments(comments.slice(0, STEP_COUNT));
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

const onAddComments = () => {
  generateComments(comments.slice(renderedComments, renderedComments + STEP_COUNT));
};

function closeModal () {
  body.classList.remove('modal-open');
  fullModal.classList.add('hidden');
  document.removeEventListener('keydown', onModalOnEsc);
  escButton.removeEventListener('click', onModalOnButton);
  comments = [];
  renderedComments = 0;
  loadButton.removeEventListener('click', onAddComments);
}

function openModal () {
  body.classList.add('modal-open');
  fullModal.classList.remove('hidden');
  document.addEventListener('keydown', onModalOnEsc);
  escButton.addEventListener('click', onModalOnButton);
  loadButton.addEventListener('click', onAddComments);
}

const showComments = (data) => {

  picturesContainer.addEventListener('click', (evt) => {
    const currentPicture = evt.target.closest('.picture');
    if (currentPicture) {
      const currentObject = data.find((item) => item.id === Number(currentPicture.dataset.id));

      openModal();
      generateFullSize(currentObject);
    }
  });
};

export {openModal, closeModal, showComments};
