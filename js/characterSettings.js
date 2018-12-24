'use strict';

(function () {
  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  var inputCoatColor = document.querySelector('.coat-color');
  var inputEyesColor = document.querySelector('.eyes-color');
  var inputFireballColor = document.querySelector('.fireball-color');

  var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

  var changeColorCharacter = function (elementOfWizardBody, color, inputName) {
    var randomColor = window.randomNumber(0, color.length);
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
})();

(function () {
  var setupCharacter = document.querySelector('.setup');
  var form = setupCharacter.querySelector('.setup-wizard-form');
  var getFormData = new FormData(form);

  form.addEventListener('submit', function (evt) {
    window.save(getFormData, onLoad, onError);
    evt.preventDefault();
  });

  var onLoad = function () {
    setupCharacter.classList.add('hidden');
  };

  var onError = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'width: 250px; margin: 0 auto; text-align: center; background-color: green; z-index: 100;';
    node.style.position = 'adsolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '25px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };
})();
