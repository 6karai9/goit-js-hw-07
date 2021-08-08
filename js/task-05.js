const nameInputEl = document.querySelector('#name-input');
const nameOutEl = document.querySelector('#name-output');

nameInputEl.addEventListener(
  'input',
  () =>
    (nameOutEl.textContent =
      nameInputEl.value === '' ? 'незнакомец' : nameInputEl.value),
);
