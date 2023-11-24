let modalOpenButtons = document.querySelectorAll('.button--modal');
let modalCloseButton = document.querySelector('.modal__button');
let modal = document.querySelector('.modal');

for (let modalOpenButton of modalOpenButtons) {
  modalOpenButton.addEventListener('click', function () {
    modal.showModal();
  })
}

modalCloseButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.close();
})

modal.addEventListener('click', closeOnBackDropClick);

function closeOnBackDropClick({currentTarget, target}) {
  const dialogElement = currentTarget;
  const isClickedOnBackDrop = target === dialogElement;
  if (isClickedOnBackDrop) {
    dialogElement.close();
  }
}
