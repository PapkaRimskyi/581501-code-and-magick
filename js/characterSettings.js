'use strict';

(function () {
  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  var inputCoatColor = document.querySelector('.coat-color');
  var inputEyesColor = document.querySelector('.eyes-color');
  var inputFireballColor = document.querySelector('.fireball-color');

  var COLOR_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var COLOR_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var COLOR_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

  var wizard = {
    onCoatChange: function () {},
    onEyesChange: function () {},
    onFireballChange: function () {}
  };

  var changeColorCharacter = function (elementOfWizardBody, color, inputName) {
    var randomColor = window.randomNumber(0, color.length);
    var elementColor = color[randomColor];
    if (elementOfWizardBody === wizardCoat) {
      elementOfWizardBody.style.fill = elementColor;
      window.wizard.onCoatChange(elementColor);
    }
    if (elementOfWizardBody === wizardEyes) {
      elementOfWizardBody.style.fill = elementColor;
      window.wizard.onEyesChange(elementColor);
    }
    if (elementOfWizardBody === wizardFireball) {
      elementOfWizardBody.style.backgroundColor = elementColor;
      window.wizard.onFireballChange(elementColor);
    }
    inputName.value = elementColor;
  };

  wizardCoat.addEventListener('click', function () {
    changeColorCharacter(wizardCoat, COLOR_COAT, inputCoatColor);
  });

  wizardEyes.addEventListener('click', function () {
    changeColorCharacter(wizardEyes, COLOR_EYES, inputEyesColor);
  });

  wizardFireball.addEventListener('click', function () {
    changeColorCharacter(wizardFireball, COLOR_FIREBALL, inputFireballColor);
  });

  return window.wizard === wizard;
})();

(function () {
  var setupCharacter = document.querySelector('.setup');
  var form = setupCharacter.querySelector('.setup-wizard-form');

  form.addEventListener('submit', function (evt) {
    window.save(new FormData(form), onLoad, window.errorHandler);
    evt.preventDefault();
  });

  var onLoad = function () {
    setupCharacter.classList.add('hidden');
  };
})();
