const UPLOAD_SERVER = 'https://27.javascript.pages.academy/kekstagram';
const DOWNLOAD_SERVER = 'https://27.javascript.pages.academy/kekstagram/data';

const getData = (onSuccess, onError) => {
  fetch(DOWNLOAD_SERVER)
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
    })
    .catch(() => {
      onError();
    });
};

const sendData = (onSuccess, onError, body) => {
  fetch(
    UPLOAD_SERVER,
    {
      method: 'POST',
      body
    },
  ).then((response) => {
    if (response.ok) {
      onSuccess();
    } else {
      onError();
    }
  })
    .catch(() => {
      onError();
    });
};


export {getData, sendData};
