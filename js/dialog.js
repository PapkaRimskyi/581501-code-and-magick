'use strict';

(function () {
  var setupCharacter = document.querySelector('.setup');
  var inputHandle = setupCharacter.querySelector('.upload');

  var defaultCoords;
  var moved;
  inputHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    defaultCoords = {x: evt.clientX, y: evt.clientY};

    moved = false;

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
  });

  var mouseMove = function (evtMove) {
    evtMove.preventDefault();
    moved = true;
    var shift = {x: defaultCoords.x - evtMove.clientX, y: defaultCoords.y - evtMove.clientY};
    defaultCoords = {x: evtMove.clientX, y: evtMove.clientY};
    setupCharacter.style.top = (setupCharacter.offsetTop - shift.y) + 'px';
    setupCharacter.style.left = (setupCharacter.offsetLeft - shift.x) + 'px';
  };

  var mouseUp = function (evtUp) {
    evtUp.preventDefault();
    if (moved) {
      onClickPreventDefault(evtUp);
      setupCharacter.addEventListener('click', onClickPreventDefault);
    }
    document.removeEventListener('mousemove', mouseMove);
    document.removeEventListener('mouseup', mouseUp);
  };

  var onClickPreventDefault = function (onClickEvt) {
    onClickEvt.preventDefault();
    setupCharacter.removeEventListener('click', onClickPreventDefault);
  };
})();
