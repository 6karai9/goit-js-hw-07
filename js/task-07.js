const refs = {
  fontControl: document.querySelector('#font-size-control'),
  resizedText: document.querySelector('#text'),
};

refs.resizedText.style.fontSize = `${refs.fontControl.value}px`;

refs.fontControl.addEventListener(
  'input',
  () => (refs.resizedText.style.fontSize = `${refs.fontControl.value}px`),
);
