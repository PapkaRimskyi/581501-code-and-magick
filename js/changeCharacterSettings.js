'use strict';

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
