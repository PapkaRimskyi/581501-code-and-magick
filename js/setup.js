'use strict';

var setupCharacter = document.querySelector('.setup');
var similarCharacter = document.querySelector('.setup-similar');
var similarCharacterList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var setupClose = setupCharacter.querySelector('.setup-close');
var setupOpen = document.querySelector('.setup-open');
var setupOpenIcon = setupOpen.querySelector('.setup-open-icon');
var setupUserNameInput = document.querySelector('.setup-user-name');
var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');
var inputCoatColor = document.querySelector('.coat-color');
var inputEyesColor = document.querySelector('.eyes-color');
var inputFireballColor = document.querySelector('.fireball-color');
var inputHandle = setupCharacter.querySelector('.upload');

similarCharacter.classList.remove('hidden');

var firstName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var secondName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var randomNumber = function (min, max) {
  return Math.floor(Math.random() * max + min);
};

var getRandomSettings = function () {
  var characterData = [];
  for (var i = 0; i < 4; i++) {
    var characterSettings = {};
    var firstNameIndex = randomNumber(0, firstName.length);
    var secondNameIndex = randomNumber(0, secondName.length);
    characterSettings.name = firstName[firstNameIndex] + ' ' +
      secondName[secondNameIndex];

    var coatColorIndex = randomNumber(0, coatColor.length);
    characterSettings.coatColor = coatColor[coatColorIndex];

    var eyesColorIndex = randomNumber(0, eyesColor.length);
    characterSettings.eyesColor = eyesColor[eyesColorIndex];
    characterData.push(characterSettings);
  }
  return characterData;
};

var getCharacter = function (characterData) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = characterData.name;
  wizardElement.querySelector('.wizard-coat').style.fill = characterData.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = characterData.eyesColor;
  return wizardElement;
};

var generationCharacter = function (characterData) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < characterData.length; i++) {
    var wizardElement = getCharacter(characterData[i]);
    fragment.appendChild(wizardElement);
  }
  return fragment;
};

var characterData = getRandomSettings();
similarCharacterList.appendChild(generationCharacter(characterData));

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

var changeColorCharacter = function (elementOfWizardBody, color, inputName) {
  var randomColor = randomNumber(0, color.length);
  var elementColor = color[randomColor];
  if (elementOfWizardBody !== wizardFireball) {
    elementOfWizardBody.style.fill = elementColor;
  } else {
    elementOfWizardBody.style.backgroundColor = elementColor;
  }
  inputName.value = elementColor;
};

wizardCoat.addEventListener('click', function () {
  changeColorCharacter(wizardCoat, coatColor, inputCoatColor);
});

wizardEyes.addEventListener('click', function () {
  changeColorCharacter(wizardEyes, eyesColor, inputEyesColor);
});

wizardFireball.addEventListener('click', function () {
  changeColorCharacter(wizardFireball, fireballColor, inputFireballColor);
});

(function () {
  inputHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    window.defaultCoords = {x: evt.clientX, y: evt.clientY};

    window.moved = false;

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
  });

  var mouseMove = function (evtMove) {
    evtMove.preventDefault();
    window.moved = true;
    var shift = {x: window.defaultCoords.x - evtMove.clientX, y: window.defaultCoords.y - evtMove.clientY};
    window.defaultCoords = {x: evtMove.clientX, y: evtMove.clientY};
    setupCharacter.style.top = (setupCharacter.offsetTop - shift.y) + 'px';
    setupCharacter.style.left = (setupCharacter.offsetLeft - shift.x) + 'px';
  };

  var mouseUp = function (evtUp) {
    evtUp.preventDefault();
    ifWindowMoved();
    document.removeEventListener('mousemove', mouseMove);
    document.removeEventListener('mouseup', mouseUp);
  };

  var ifWindowMoved = function () {
    if (window.moved) {
      var onClickPreventDefault = function (onClickEvt) {
        onClickEvt.preventDefault();
        setupCharacter.removeEventListener('click', onClickPreventDefault);
      };
      setupCharacter.addEventListener('click', onClickPreventDefault);
    }
  };
})();
