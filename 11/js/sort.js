import { dataChanged } from './small-photo.js';
import {dataComments} from './fullsize-photo.js';

// const sortBlock = document.querySelector('.img-filters');
const filterDefault = document.querySelector('#filter-default');
const filterRandom = document.querySelector('#filter-random');
const filterDiscussed = document.querySelector('#filter-discussed');

const discussedFunc = (photos) => {
  const deletePrevious = document.querySelector('.img-filters__button--active');
  deletePrevious.classList.remove('img-filters__button--active');
  filterDiscussed.classList.add('img-filters__button--active');
  photos.sort((a, b) => a.likes > b.likes ? -1 : 1);
  console.log('photos discussed');
  dataChanged(photos);
  dataComments(photos);
};

const defaultFunc = (photos) => {
  const deletePrevious = document.querySelector('.img-filters__button--active');
  deletePrevious.classList.remove('img-filters__button--active');
  filterDefault.classList.add('img-filters__button--active');
  console.log('photos default');
  dataChanged(photos);
  dataComments(photos);
};

const randomFunc = (photos) => {
  const deletePrevious = document.querySelector('.img-filters__button--active');
  deletePrevious.classList.remove('img-filters__button--active');
  filterRandom.classList.add('img-filters__button--active');

  let newPhotos = [];

  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  while (newPhotos.length !== 10) {
    const index = getRandomInt(photos.length);
    newPhotos.push(photos[index]);
    newPhotos = newPhotos.filter((v, i, arr) => arr.indexOf(v) === i);
  }
  dataChanged(newPhotos);
  dataComments(newPhotos);
  console.log(newPhotos);
};

const formFilter = document.querySelector('.img-filters__form');


const allFilters = (photos) => {
  formFilter.addEventListener('click', (evt) => {
    if (evt.target === filterDiscussed) {
      discussedFunc(photos);
    } else if (evt.target === filterDefault) {
      defaultFunc(photos);
    } else if (evt.target === filterRandom) {
      randomFunc(photos);
    }
  });
};

export {discussedFunc, defaultFunc, allFilters};
