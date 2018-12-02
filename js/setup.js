'use strict';
var setupCharacter = document.querySelector('.setup');
var similarCharacter = document.querySelector('.setup-similar');
var similarCharacterList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

setupCharacter.classList.remove('hidden');
similarCharacter.classList.remove('hidden');

var firstName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var secondName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

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

var cloneTemplate = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  return wizardElement;
};

var getCharacter = function () {
  var characterData = getRandomSettings();
  for (var i = 0; i < 4; i++) {
    var wizardElement = cloneTemplate();
    wizardElement.querySelector('.setup-similar-label').textContent = characterData[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = characterData[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = characterData[i].eyesColor;
  }
  return wizardElement;
};

var icludeDomElement = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < 4; i++) {
    var wizardElement = getCharacter();
    fragment.appendChild(wizardElement);
  }
  return fragment;
};

icludeDomElement();
similarCharacterList.appendChild(icludeDomElement());
