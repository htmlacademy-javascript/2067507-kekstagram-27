function isDefault() {
  if (chosenEffect === noneEffect) {
    filterRange.classList.add('hidden');
  } else {
    filterRange.classList.remove('hidden');
  }
}
