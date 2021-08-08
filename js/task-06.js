const symbolInputEl = document.querySelector('#validation-input');

symbolInputEl.addEventListener('blur', () => {
  symbolInputEl.value.length === Number(symbolInputEl.dataset.length)
    ? (symbolInputEl.classList.add('valid'),
      symbolInputEl.classList.remove('invalid'))
    : (symbolInputEl.classList.add('invalid'),
      symbolInputEl.classList.remove('valid'));
});
