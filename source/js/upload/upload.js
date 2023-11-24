import {checkValidity} from './validation.js';

const form = document.querySelector('.form__order');
const button = document.querySelector('.form__button');
const messageTemplate = document.querySelector('#success-message');
const message = messageTemplate.content.querySelector('.message').cloneNode(true);
const messageButton = message.querySelector('.message__button');

const setButtonDisabled = (flag) => {
  button.disabled = flag;
  button.textContent = flag ? 'Отправляю...' : 'Отправить заказ';
};

const clearField = () => {
  form.querySelectorAll('input').forEach((field) => {
    field.value = '';
  });
  form.querySelector('textarea').value = '';
  form.querySelectorAll('.radio-input')[0].checked = true;
  form.querySelectorAll('.checkbox-input').forEach((checkbox) => {
    checkbox.checked = false;
  });
};

const onButtonClick = (event) => {
  event.preventDefault();
  if (checkValidity()) {
    setButtonDisabled(true);
    setTimeout(() => {
      document.body.appendChild(message);
    }, 2000);
  }
};

const clearForm = () => {
  message.remove();
  clearField();
  setButtonDisabled(false);
};

const onMessageClick = (event) => {
  if (event.target === messageButton || event.target === message) {
    clearForm();
  }
};

const onDocumentKeydown = (event) => {
  if (event.key.startsWith('Esc')) {
    clearForm();
  }
};

button.addEventListener('click', onButtonClick);
message.addEventListener('click', onMessageClick);
document.addEventListener('keydown', onDocumentKeydown);
