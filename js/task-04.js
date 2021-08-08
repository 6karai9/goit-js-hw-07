const refs = {
  decrement: document.querySelector('[data-action="decrement"]'),
  increment: document.querySelector('[data-action="increment"]'),
  totalValue: document.querySelector('#value'),
  counterValue: 0,
};

refs.decrement.addEventListener(
  'click',
  () => (refs.totalValue.textContent = refs.counterValue -= 1),
);
refs.increment.addEventListener(
  'click',
  () => (refs.totalValue.textContent = refs.counterValue += 1),
);
