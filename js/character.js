'use strict';

(function () {
  var colorCoat;
  var colorEyes;
  var colorFireball;
  var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === colorCoat) {
      rank += 2;
    }
    if (wizard.colorEyes === colorEyes) {
      rank += 1;
    }
    if (wizard.colorFireball === colorFireball) {
      rank += 1;
    }
    return rank;
  };

  var updateWizards = function () {
    window.renderMage(wizards.slice().sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = wizards.indexOf(left) - wizards.indexOf(right);
      }
      return rankDiff;
    }));
  };

  window.wizard.onCoatChange = window.debounce(function (color) {
    colorCoat = color;
    updateWizards();
  });

  window.wizard.onEyesChange = window.debounce(function (color) {
    colorEyes = color;
    updateWizards();
  });

  window.wizard.onFireballChange = window.debounce(function (color) {
    colorFireball = color;
    updateWizards();
  });

  var successHandler = function (data) {
    wizards = data;
    updateWizards();
  };

  window.load(successHandler, window.errorHandler);
})();
