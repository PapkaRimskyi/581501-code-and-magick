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

var ESC_KEYNUMBER = 27;
var ENTER_KEYNUMBER = 13;
