import './small-photo.js';
import './fullsize-photo.js';
import './upload.js';
import './scale.js';
import './filter.js';
import './photo-choose.js';
import { getData } from './fetch.js';
import { setUserFormSubmit } from './form.js';
import {showErrUpload, showOkUpload} from './util.js';
import { changeData } from './small-photo.js';
import { showComments } from './fullsize-photo.js';
import { getError, sortingGetVisible} from './util.js';
import {onClickFilters} from './sort.js';


getData((photos) => {
  changeData(photos);
  showComments(photos);
  sortingGetVisible();

  onClickFilters(photos);
}, () => {
  getError();
});

setUserFormSubmit(showOkUpload, showErrUpload);
