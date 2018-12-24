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

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < 4; i++) {
      var randomSimilarCharacter = window.randomNumber(0, wizards.length);
      var wizardElement = getCharacter(wizards[randomSimilarCharacter]);
      fragment.appendChild(wizardElement);
    }
    similarCharacterList.appendChild(fragment);
    setupSimilar.classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'width: 250px; margin: 0 auto; text-align: center; background-color: darkblue; z-index: 100;';
    node.style.position = 'adsolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.load(successHandler, errorHandler);
})();
