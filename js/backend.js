'use strict';

(function () {
  var URL = 'https://js.dump.academy/code-and-magick';

  window.save = function (data, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Ошибка ' + xhr.status + ' ' + xhr.statusText);
    });

    xhr.open('POST', URL);
    xhr.send(data);
  };
})();

(function () {
  var URL = 'https://js.dump.academy/code-and-magick/data';
  window.load = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = 10000;

    xhr.open('GET', URL);
    xhr.send();
  };
})();

(function () {
  window.errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'width: 250px; margin: 0 auto; text-align: center; background-color: darkblue; z-index: 100;';
    node.style.position = 'adsolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };
})();
