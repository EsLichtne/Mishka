import {renderMessage} from './message.js';

const modalOpenButtons = document.querySelectorAll('.button--modal');
const modalCloseButton = document.querySelector('.modal__button');
const modal = document.querySelector('.modal');
const radioButtons = document.querySelectorAll('.basket-adder__radio');

const clearField = () => {
  radioButtons[0].checked = true;
};

for (let modalOpenButton of modalOpenButtons) {
  modalOpenButton.addEventListener('click', function () {
    modal.showModal();
  })
}

modalCloseButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.close();
  clearField();
  renderMessage();
  document.dispatchEvent(new Event('basket'));
})

modal.addEventListener('click', closeOnBackDropClick);

function closeOnBackDropClick({currentTarget, target}) {
  const dialogElement = currentTarget;
  const isClickedOnBackDrop = target === dialogElement;
  if (isClickedOnBackDrop) {
    dialogElement.close();
  }
}
