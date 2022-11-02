const OnScaleLessBtn = document.querySelector('.scale__control--smaller');
const OnScaleMoreBtn = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');
const previewSize = document.querySelector('.img-upload__preview');

const maxScale = 100;
const minScale = 25;
const sizeStep = 25;
const defaultScale = 100;

// const sizeSwitch = () => { switch (defaultSize) {
//   case 25:
//     previewSize.style.transform = 'scale(0.25)';
//     break;
//   case 50:
//     previewSize.style.transform = 'scale(0.50)';
//     break;
//   case 75:
//     previewSize.style.transform = 'scale(0.75)';
//     break;
//   case 100:
//     previewSize.style.transform = 'scale(1)';
//     break;
// }};
//потом придумать как их убрать

const scaleImg = (value = defaultScale) => {
  previewSize.style.transform = `scale(${value / 100})`;
  scaleInput.value = `${value}%`;};

//В ретро есть белый фон - у меня нет
OnScaleLessBtn.addEventListener('click', () => {
  const currentValue = parseInt(scaleInput.value, 10);
  let newValue = currentValue - sizeStep;
  if (newValue < minScale) {
    newValue = minScale;
  }
  scaleImg(newValue);
});

OnScaleMoreBtn.addEventListener('click', () => {
  const currentValue = parseInt(scaleInput.value, 10);
  let newValue = currentValue + sizeStep;
  if (newValue > maxScale) {
    newValue = maxScale;
  }
  scaleImg(newValue);
});

const resetScale = () => {
  scaleImg();
};

export {resetScale};
