import { changeData } from './small-photo.js';
import { debounce, getRandomPhotos } from './util.js';

const FILTER_DELAY = 500;
const RANDOM_FILTER_COUNT = 10;

const formFilter = document.querySelector('.img-filters__form');

const setActiveButton = (button) => {
  const activedButton = document.querySelector('.img-filters__button--active');
  activedButton.classList.remove('img-filters__button--active');
  button.classList.add('img-filters__button--active');
};

const clearPhotoList = () => {
  const list = document.querySelectorAll('.picture');
  list.forEach((item) => item.remove());
};

const discussedFunc = (photos) => {
  const discussedPhotos = photos.slice().sort((a, b) => a.likes > b.likes ? -1 : 1);
  changeData(discussedPhotos);
};

const defaultFunc = (photos) => {
  changeData(photos);
};

const randomFunc = (photos) => {
  changeData(getRandomPhotos(photos, RANDOM_FILTER_COUNT));
};

const filterPhotoSwitch = debounce((photos, filterId) => {
  clearPhotoList();
  switch (filterId) {
    case 'filter-random':
      randomFunc(photos);
      break;
    case 'filter-discussed':
      discussedFunc(photos);
      break;
    case 'filter-default':
      defaultFunc(photos);
      break;
  }
}, FILTER_DELAY);

const onClickFilters = (photos) => {
  formFilter.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('img-filters__button')) {
      setActiveButton(evt.target);
      filterPhotoSwitch(photos, evt.target.id);
    }
  });
};

export {discussedFunc, defaultFunc, onClickFilters};
