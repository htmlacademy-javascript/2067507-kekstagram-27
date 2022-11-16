import { dataChanged } from './small-photo.js';
import {dataComments} from './fullsize-photo.js';
import { setuserFormSubmit } from './form.js';
// import {closeEditor} from './upload.js';
import {showErrUpload, showOkUpload, onErrorGet} from './util.js';


fetch('https://27.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((photos) => {
    dataChanged(photos);
    dataComments(photos);
  })
  .catch(() => {
    onErrorGet();
  });

setuserFormSubmit(showOkUpload, showErrUpload);
