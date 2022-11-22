const pictureTemplate = document.querySelector('#picture').content;
const picture = pictureTemplate.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');

const changeData = (data) => {
  const photoFragment = document.createDocumentFragment();

  data.forEach((item) => {
    const photoElement = picture.cloneNode(true);
    const img = photoElement.querySelector('.picture__img');
    img.src = item.url;
    photoElement.dataset.id = item.id;
    photoElement.querySelector('.picture__likes').textContent = item.likes;
    photoElement.querySelector('.picture__comments').textContent = item.comments.length;
    photoFragment.appendChild(photoElement);
  });

  picturesContainer.appendChild(photoFragment);
};

export {picturesContainer, changeData};

