'use strict';
// Ширина окна со статистикой
var CLOUD_WEIGHT = 420;
// Высота окна со статистикой
var CLOUD_HEIGHT = 270;
// Координата окна с белым фоном по x
var CLOUD_X = 100;
// Координата окна с белым фоном по y
var CLOUD_Y = 10;
// Величина отступа черного окна от белого
var CLOUD_INDENT = 10;
// Величина отступа колонок друг от друга
var BAR_INDENT = 50;
// Отступ у текста
var FONT_INDENT = 15;
// Координата текста 'Вы' по x
var TEXT_X = 140;
// Координата текста 'Вы' по y
var TEXT_Y = 255;
// Начальная координата у первого столбца по x
var BAR_START_X = 140;
// Начальная координата у первого столбца по y
var BAR_START_Y = 245;
// Ширина столбцов
var BAR_WIDTH = 40;
// Высота столбцов (-150)
var BAR_HEIGHT = (CLOUD_HEIGHT - BAR_START_Y - (CLOUD_INDENT * 17 + 5));
var TIME_START_Y = BAR_START_Y - (FONT_INDENT + 3);

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WEIGHT, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_INDENT, CLOUD_Y + CLOUD_INDENT, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = ('16px PT Mono');
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + (CLOUD_INDENT * 2), CLOUD_Y + (CLOUD_INDENT * 2));
  ctx.fillText('Список результатов:', CLOUD_X + (CLOUD_INDENT * 2), CLOUD_Y + (CLOUD_INDENT * 4));
  var maxTime = getMaxElement(times);
  for (var i = 0; i <= names.length - 1; i++) {
    var coordinatX = BAR_START_X + (BAR_WIDTH * i) + (BAR_INDENT * i);
    var heightBar = (BAR_HEIGHT * times[i]) / maxTime;
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(names[i], coordinatX, TEXT_Y);
    ctx.fillText(Math.round(times[i]), coordinatX, TIME_START_Y + heightBar);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, ' + 256 * Math.random() + ', 1)';
    }
    ctx.fillRect(coordinatX, BAR_START_Y, BAR_WIDTH, heightBar);
  }
};
