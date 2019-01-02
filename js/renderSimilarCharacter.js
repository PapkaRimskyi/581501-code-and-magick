'use strict';

(function () {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var similarCharacterList = document.querySelector('.setup-similar-list');
  var setupSimilar = document.querySelector('.setup-similar');

  var getCharacter = function (characterData) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = characterData.name;
    wizardElement.querySelector('.wizard-coat').style.fill = characterData.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = characterData.colorEyes;
    return wizardElement;
  };

  window.renderMage = function (wizards) {
    var fragment = document.createDocumentFragment();
    similarCharacterList.innerHTML = '';
    for (var i = 0; i < 4; i++) {
      var wizardElement = getCharacter(wizards[i]);
      fragment.appendChild(wizardElement);
    }
    similarCharacterList.appendChild(fragment);
    setupSimilar.classList.remove('hidden');
  };
})();
