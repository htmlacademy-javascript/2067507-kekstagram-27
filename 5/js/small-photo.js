import {createPhotoDesctiptions} from './data.js';

const pictureTemp = document.querySelector('#picture').content;

const picture = pictureTemp.querySelector('.picture');

const miniContainer = document.querySelector('.pictures');

const photoFragment = document.createDocumentFragment();


const copyPhoto = (param) => {
  for (let i = 0; i < param.length; i++) {
    const photoElement = picture.cloneNode(true);
    photoElement.querySelector('.picture__img').src = param[i].url;
    photoElement.querySelector('.picture__likes').textContent = param[i].likes;
    photoElement.querySelector('.picture__comments').textContent = param[i].comments.length;
    photoFragment.appendChild(photoElement);
  }
};

copyPhoto(createPhotoDesctiptions);

miniContainer.appendChild(photoFragment);
export {miniContainer};

