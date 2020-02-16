'use strict';

(function () {
  var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var wizardCoatColors = ['rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)', 'rgb(101, 137, 164)'];
  var wizardEyesColors = ['red', 'blue', 'yellow', 'green', 'black'];
  var wizardsQuantity = 4;
  var getRandomElement = window.utils.getRandomElement;

  var createWizardsDate = function (names, surnames, coatColors, eyesColors) {
    var arr = [];
    for (var i = 0; i < wizardsQuantity; i++) {
      arr[i] = {};
      arr[i].name = getRandomElement(names) + ' ' + getRandomElement(surnames);
      arr[i].coatColor = getRandomElement(coatColors);
      arr[i].eyesColor = getRandomElement(eyesColors);
    }
    return arr;
  };

  var wizardsDate = createWizardsDate(wizardNames, wizardSurnames, wizardCoatColors, wizardEyesColors);

  window.data = {
    wizards: wizardsDate,
  };
})();
