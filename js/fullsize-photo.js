import {createPhotoDesctiptions} from './data.js';
import { miniContainer } from './small-photo.js';
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
let commentsArr = [];

const generateComments = function (arrayOfFive) {
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
  hideLoadBtn();
};

const generateFullSize = function (photoObject) {
  photoDescription.textContent = photoObject.description;
  urlBigPic.src = photoObject.url;
  likesCount.textContent = String(photoObject.likes);
  commentsCount.textContent = String(photoObject.comments.length);

  photoComments.innerHTML = '';

  commentsArr = photoObject.comments;

  generateComments(commentsArr.slice(0, STEP_COUNT));
};

function hideLoadBtn () {
  if (renderedComments === commentsArr.length) {
    loadButton.classList.add('hidden');
  } else {
    loadButton.classList.remove('hidden');
  }
}

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

function addComments () {
  generateComments(commentsArr.slice(renderedComments, renderedComments + STEP_COUNT));
}

function closeModal () {
  body.classList.remove('modal-open');
  fullModal.classList.add('hidden');
  document.removeEventListener('keydown', onModalOnEsc);
  escButton.removeEventListener('click', onModalOnButton);
  commentsArr = [];
  renderedComments = 0;
}

function openModal () {
  body.classList.add('modal-open');
  fullModal.classList.remove('hidden');
  document.addEventListener('keydown', onModalOnEsc);
  escButton.addEventListener('click', onModalOnButton);
  loadButton.addEventListener('click', addComments);
}


miniContainer.addEventListener('click', (evt) => {
  const currentPicture = evt.target.closest('.picture');
  if (currentPicture) {
    const currentObject = createPhotoDesctiptions.find((item) => item.id === Number(currentPicture.dataset.id));

    openModal();
    generateFullSize(currentObject);
  }
});


export {openModal, closeModal};
