import { changeData } from './small-photo.js';
import { showComments } from './fullsize-photo.js';
import { errorGet, sortingGetVisible} from './util.js';
import {onClickFilters} from './sort.js';

const getData = () => {
  fetch('https://27.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((photos) => {
      changeData(photos);
      showComments(photos);
      sortingGetVisible();

      onClickFilters(photos);
    })
    .catch(() => {
      errorGet();
    });
};

export {getData};
