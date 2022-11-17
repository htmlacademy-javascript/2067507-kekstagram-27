import { dataChanged } from './small-photo.js';
import {dataComments} from './fullsize-photo.js';
import { setUserFormSubmit } from './form.js';
import {showErrUpload, showOkUpload, onErrorGet} from './util.js';
import {onClickFilters} from './sort.js';
const sortBlock = document.querySelector('.img-filters');
const sortingVisible = () => {
  sortBlock.classList.remove('img-filters--inactive');
};

fetch('https://27.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((photos) => {
    dataChanged(photos);
    dataComments(photos);
    sortingVisible();

    onClickFilters(photos);
  })
  .catch(() => {
    onErrorGet();
  });

setUserFormSubmit(showOkUpload, showErrUpload);

