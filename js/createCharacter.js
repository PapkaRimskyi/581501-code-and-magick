'use strict';

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
