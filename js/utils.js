'use strict';

(function () {
  var getRandomElement = function (arr) {
    return arr[Math.floor(Math.random() * (arr.length))];
  };

  var colorIndex = 0;

  var changeColor = function (arr, element, input) {
    colorIndex = (colorIndex > arr.length - 1) ? 0 : colorIndex;
    var color = arr[colorIndex];
    colorIndex++;
    if (element.style.fill) {
      element.style.fill = color;
    } else {
      element.style.backgroundColor = color;
    }
    input.value = color;
  };

  var getMaxElement = function (arr) {
    if (arr.length) {
      var maxElement = arr[0];
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxElement) {
          maxElement = arr[i];
        }
      }
    } else {
      maxElement = null;
    }
    return maxElement;
  };

  window.utils = {
    getRandomElement: getRandomElement,
    changeColor: changeColor,
    getMaxElement: getMaxElement,
  };

})();
