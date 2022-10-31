const scaleLessBtn = document.querySelector('.scale__control--smaller');
const scaleMoreBtn = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');
const previewSize = document.querySelector('.img-upload__preview');

let defaultSize = 100;
const sizeStep = 25;
scaleInput.value = `${defaultSize}%`;

const sizeSwitch = () => { switch (defaultSize) {
  case 25:
    previewSize.style.transform = 'scale(0.25)';
    break;
  case 50:
    previewSize.style.transform = 'scale(0.50)';
    break;
  case 75:
    previewSize.style.transform = 'scale(0.75)';
    break;
  case 100:
    previewSize.style.transform = 'scale(1)';
    break;
}};
//потом придумать как их убрать
scaleLessBtn.addEventListener('click', () => {
  if (defaultSize > 25) {
    defaultSize -= sizeStep;
    sizeSwitch();
    scaleInput.value = `${defaultSize}%`;
  }
});

scaleMoreBtn.addEventListener('click', () => {
  if (defaultSize < 100) {
    defaultSize += sizeStep;
    sizeSwitch();
    scaleInput.value = `${defaultSize}%`;
  }
});


