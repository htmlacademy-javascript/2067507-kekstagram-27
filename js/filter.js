const filterRange = document.querySelector('.effect-level__slider');
const effectsList = document.querySelector('.effects__list');
const radiosAll = document.querySelectorAll('.effects__radio');
const itemsLi = document.querySelectorAll('.effects__item');

// const EFFECTS = ['effects__preview--none', 'effects__preview--chrome', 'effects__preview--sepia', 'effects__preview--marvin', 'effects__preview--phobos', 'effects__preview--heat'];

noUiSlider.create(filterRange, {
  range: {
    min: 0,
    max: 100,
  },
  start: 0,
  step: 1,
  connect: 'lower',
});

filterRange.noUiSlider.on('update', (...rest) => {
  // console.log(rest);
});


effectsList.addEventListener('change', (evt) => {
  // console.log(evt.target.closest('.effects__list'))

})

// console.log(document.querySelector('#effect-none').checked);


radiosAll.forEach((radio) => {
  // console.log(radio.id);
}
);



// switch (radio.id) {
//   case 'effects-none':
//     console.log(1);
//     break;
//   case 'effects-chrome':
//     console.log(2);
//     break;
//   case 'effects-sepia':
//     console.log(3);
//     break;
//   case 'effects-marvin':
//     console.log(4);
//     break;
//   case 'effects-phobos':
//     console.log(5);
//     break;
//   case 'effects-heat':
//     console.log(6);
//     break;
// }


