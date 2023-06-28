import throttle from 'lodash.throttle';

const submitForm = document.querySelector('.feedback-form');
const emailField = submitForm.querySelector('input[name="email"]');
const massageField = submitForm.querySelector('textarea[name="message"]');

const storageKey = 'feedback-form-state';

const savingToStorage = () => {
  const dataForm = {email: emailField.value, message: massageField.value};
  localStorage.setItem(storageKey, JSON.stringify(dataForm));
};

const completingForm = () => {
  if (localStorage.getItem(storageKey)) {
    const dataForm = JSON.parse(localStorage.getItem(storageKey));
    emailField.value = dataForm.email;
    massageField.value = dataForm.message;
  };
};

const submitHandler = (e) => {
  e.preventDefault();
  const dataForm = {email: emailField.value, message: massageField.value};
  console.log(dataForm);
  emailField.value = '';
  massageField.value = '';
  localStorage.removeItem(storageKey);
};

submitForm.addEventListener('input', throttle(savingToStorage, 500));
document.addEventListener('DOMContentLoaded', completingForm);
submitForm.addEventListener('submit', submitHandler);