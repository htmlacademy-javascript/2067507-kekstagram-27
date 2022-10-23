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
