import {createPhotoDesctiptions} from './data.js';

const pictureTemp = document.querySelector('#picture').content;

const picture = pictureTemp.querySelector('.picture');

const miniContainer = document.querySelector('.pictures');

const photoFragment = document.createDocumentFragment();


createPhotoDesctiptions.forEach((item) => {
  const photoElement = picture.cloneNode(true);
  photoElement.querySelector('.picture__img').src = item.url;
  photoElement.querySelector('.picture__likes').textContent = item.likes;
  photoElement.querySelector('.picture__comments').textContent = item.comments.length;
  photoFragment.appendChild(photoElement);
});


miniContainer.appendChild(photoFragment);

export {miniContainer};

// Полноразмер
const fullModal = document.querySelector('.big-picture');
const escButton = document.querySelector('.cancel');
const socialComments = document.querySelector('.social__comment-count');
const commentsLoad = document.querySelector('.comments-loader');
const body = document.querySelector('body');

const pictures = document.querySelectorAll('.picture');

const fullsizedPic = function (pic) {
  fullModal.classList.remove('hidden');
  pic.addEventListener('click', (evt) => {
    evt.preventDefault();
    fullModal.classList.remove('hidden');
  });
  //Вот этот блок кода работает хорошо
  if (!fullModal.classList.contains('hidden')) {
    socialComments.classList.add('hidden');
    commentsLoad.classList.add('hidden');
    body.classList.add('modal-open');
  }
  //А ивенты вообще не реагируют
  escButton.addEventListener('click', () => {
    fullModal.classList.add('hidden');
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      fullModal.classList.remove('hidden');
    }
  });
};
for (let i = 0; i < pictures.length; i++) {
  fullsizedPic(pictures[i]);
}
