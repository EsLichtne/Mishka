const basketText = document.querySelector('.navigation__value');

let counter = 0;
let text = 'товар';

document.addEventListener('basket', () => {
  counter++;

  switch (counter) {
    case 1:
      text = 'товар';
      break;
    case 2:
    case 3:
    case 4:
      text = 'товара';
      break;
    default:
      text = 'товаров';
      break;
  }

  basketText.textContent = `${counter}\u00A0${text}`;
});
