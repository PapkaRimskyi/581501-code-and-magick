'use strict';

(function () {
  var setupCharacter = document.querySelector('.setup');
  var setupUserNameInput = document.querySelector('.setup-user-name');
  var setupClose = setupCharacter.querySelector('.setup-close');
  var setupOpen = document.querySelector('.setup-open');
  var setupOpenIcon = setupOpen.querySelector('.setup-open-icon');

  var ESC_KEYNUMBER = 27;
  var ENTER_KEYNUMBER = 13;

  var openPopup = function () {
    setupCharacter.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setupCharacter.classList.add('hidden');
    setupCharacter.style = '';
    document.removeEventListener('keydown', onPopupEscPress);
  };

  var onPopupEscPress = function (evt) {
    var activeElement = document.activeElement;
    if (evt.keyCode === ESC_KEYNUMBER && activeElement !== setupUserNameInput) {
      closePopup();
    }
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpenIcon.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYNUMBER) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYNUMBER) {
      closePopup();
    }
  });
})();
