import '../../vendor/pristine/pristine.min.js';

const form = document.querySelector('.form__order');

const pristine = new Pristine(form, {
  classTo: 'form__item',
  errorClass: 'form__item--error',
  errorTextParent: 'form__item',
  errorTextClass: 'form__error'
});

const checkValidity = () => pristine.validate();

export {checkValidity};
