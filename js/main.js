import './small-photo.js';
import './fullsize-photo.js';
import './upload.js';
import './form.js';
import './scale.js';
import './filter.js';
import './sort.js';
import './photo-choose.js';
import { getData } from './fetch.js';
import { setUserFormSubmit } from './form.js';
import {showErrUpload, showOkUpload} from './util.js';

getData();

setUserFormSubmit(showOkUpload, showErrUpload);
