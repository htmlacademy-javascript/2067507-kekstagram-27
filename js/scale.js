const MAX_SCALE = 100;
const MIN_SCALE = 25;
const SIZE_STEP = 25;
const DEFAULT_SCALE = 100;

const OnScaleLessBtn = document.querySelector('.scale__control--smaller');
const OnScaleMoreBtn = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');
const previewSize = document.querySelector('.img-upload__preview img');

const scaleImg = (value = DEFAULT_SCALE) => {
  previewSize.style.transform = `scale(${value / 100})`;
  scaleInput.value = `${value}%`;};

OnScaleLessBtn.addEventListener('click', () => {
  const currentValue = parseInt(scaleInput.value, 10);
  let newValue = currentValue - SIZE_STEP;
  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  scaleImg(newValue);
});

OnScaleMoreBtn.addEventListener('click', () => {
  const currentValue = parseInt(scaleInput.value, 10);
  let newValue = currentValue + SIZE_STEP;
  if (newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  scaleImg(newValue);
});

const resetScale = () => {
  scaleImg();
};

export {resetScale};
