import {createPhotoDesctiptions} from './data.js';
import { miniContainer } from './small-photo.js';
import {isEscapeKey} from './util.js';
const fullModal = document.querySelector('.big-picture');
const escButton = fullModal.querySelector('.cancel');
const socialComments = document.querySelector('.social__comment-count');
const commentsLoad = document.querySelector('.comments-loader');
const body = document.querySelector('body');
const pictures = document.querySelectorAll('.picture');

const fullsizedPic = function (pic) {
  for (let i = 0; i < pic.length; i++) {
    const photoDescription = document.querySelector('.social__caption');
    photoDescription.textContent = createPhotoDesctiptions[i].description;


    pic[i].addEventListener('click', (evt) => {
      evt.preventDefault();
      openModal();
      const bigPicture = document.querySelector('.big-picture__img');
      const urlBigPic = bigPicture.querySelector('img');
      const fullPic = pic[i].querySelector('img').src;
      urlBigPic.src = fullPic;
      const likesCount = document.querySelector('.likes-count');
      likesCount.textContent = pic[i].querySelector('.picture__likes').textContent;
      const commentsCount = document.querySelector('.comments-count');
      commentsCount.textContent = pic[i].querySelector('.picture__comments').textContent;
      body.classList.add('modal-open');
      const photoComments = document.querySelector('.social__comments');
      while (photoComments.firstChild) {
        photoComments.removeChild(photoComments.lastChild);
      }
      for (let j = 0; j < createPhotoDesctiptions[i].comments.length; j++) {
        const photoComment = document.createElement('li');
        photoComment.classList.add('social__comment');
        photoComments.appendChild(photoComment);
        const commentAvatar = document.createElement('img');
        commentAvatar.classList.add('social__picture');
        commentAvatar.src = createPhotoDesctiptions[i].comments[j].avatar;
        commentAvatar.alt = createPhotoDesctiptions[i].comments[j].name;
        //Эти значения - 35 даны в примере, может правильно их куда-то вынести? чтобы потом легко заменить было
        commentAvatar.width = '35';
        commentAvatar.height = '35';
        photoComment.appendChild(commentAvatar);
        const commentText = document.createElement('p');
        commentText.classList.add('social__text');
        commentText.textContent = createPhotoDesctiptions[i].comments[j].message;
        photoComment.appendChild(commentText);
      }
      escButton.addEventListener('click', () => {
        closeModal();
      });
    });

  }
};

fullsizedPic(pictures);

const onModalOnEsc = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

function closeModal () {
  fullModal.classList.add('hidden');
  document.removeEventListener('keydown', onModalOnEsc);
}

function openModal () {
  fullModal.classList.remove('hidden');
  document.addEventListener('keydown', onModalOnEsc);
}

socialComments.classList.add('hidden');
commentsLoad.classList.add('hidden');

//Попытка сделать один обработчик
// function onPictureChange (evt) {
//   if (evt.target.matches('.picture')) {
//     evt.preventDefault();
//     openModal();
//   }
// }

// miniContainer.addEventListener('click', onPictureChange);
