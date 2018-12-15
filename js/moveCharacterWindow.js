'use strict';

inputHandle.addEventListener('mousedown', function (evt) {
  evt.preventDefault();
  var defaultCoords = {x: evt.clientX, y: evt.clientY};

  var moved = false;

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
    document.removeEventListener('mousemove', mouseMove);
    document.removeEventListener('mouseup', mouseUp);
    if (moved) {
      var onClickPreventDefault = function (onClickEvt) {
        onClickEvt.preventDefault();
        setupCharacter.removeEventListener('click', onClickPreventDefault);
      };
      setupCharacter.addEventListener('click', onClickPreventDefault);
    }
  };
  document.addEventListener('mousemove', mouseMove);
  document.addEventListener('mouseup', mouseUp);
});
