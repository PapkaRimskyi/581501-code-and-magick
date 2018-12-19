'use strict';

(function () {
  var setupUserNameInput = document.querySelector('.setup-user-name');

  setupUserNameInput.addEventListener('invalid', function () {
    if (setupUserNameInput.validity.tooShort) {
      setupUserNameInput.setCustomValidity('Имя персонажа не может содержать менее 2 символов.');
    } else if (setupUserNameInput.validity.tooLong) {
      setupUserNameInput.setCustomValidity('Максимальная длина имени персонажа — 25 символов.');
    } else if (setupUserNameInput.validity.valueMissing) {
      setupUserNameInput.setCustomValidity('Обязательно для заполнения');
    } else {
      setupUserNameInput.setCustomValidity('');
    }
  });
})();
