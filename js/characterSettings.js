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
