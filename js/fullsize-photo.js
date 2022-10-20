const fullModal = document.querySelector('.big-picture');
const escButton = document.querySelector('.cancel');
const socialComments = document.querySelector('.social__comment-count');
const commentsLoad = document.querySelector('.comments-loader');
const body = document.querySelector('body');
// const bigPicture = document.querySelector('.big-picture__img');

const pictures = document.querySelectorAll('.picture');

const fullsizedPic = function (pic) {
  pic.addEventListener('click', (evt) => {
    evt.preventDefault();
    fullModal.classList.remove('hidden');
  });
  //Вот этот блок кода работает хорошо
  if (!fullModal.classList.contains('hidden')) {
    socialComments.classList.add('hidden');
    commentsLoad.classList.add('hidden');
    body.classList.add('modal-open');
  }
  //А ивенты вообще не реагируют
  escButton.addEventListener('click', () => {
    fullModal.classList.add('hidden');
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      fullModal.classList.remove('hidden');
    }
  });
};
for (let i = 0; i < pictures.length; i++) {
  fullsizedPic(pictures[i]);
}
