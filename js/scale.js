const MAX_SCALE = 100;
const MIN_SCALE = 25;
const SIZE_STEP = 25;
const DEFAULT_SCALE = 100;

const scaleInput = document.querySelector('.scale__control--value');
const previewSize = document.querySelector('.img-upload__preview img');
const scaleBlock = document.querySelector('.scale');

const setScaleImg = (value = DEFAULT_SCALE) => {
  previewSize.style.transform = `scale(${value / DEFAULT_SCALE})`;
  scaleInput.value = `${value}%`;
};

scaleBlock.addEventListener('click', (evt) => {
  const eventTarget = evt.target;
  if (eventTarget.tagName !== 'BUTTON') {
    return;
  }

  const currentValue = parseInt(scaleInput.value, 10);
  const newValue = evt.target.classList.contains('scale__control--smaller') ? currentValue - SIZE_STEP : currentValue + SIZE_STEP;
  if (newValue >= MIN_SCALE && newValue <= MAX_SCALE) {
    setScaleImg(newValue);
  }
});

const resetScale = () => {
  setScaleImg();
};

export {resetScale};
