'use strict';

var setup = document.querySelector('.setup');
var setupSimilar = document.querySelector('.setup-similar');
var setupSimilarList = setup.querySelector('.setup-similar-list');
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var wizardsQuantity = 4;

var getRandomElement = function (arr) {
  return arr[Math.floor(Math.random() * (arr.length))];
};

var createWizards = function (names, surnames, coatColors, eyesColors) {
  var arr = [];
  for (var i = 0; i < wizardsQuantity; i++) {
    arr[i] = {};
    arr[i].name = getRandomElement(names) + ' ' + getRandomElement(surnames);
    arr[i].coatColor = getRandomElement(coatColors);
    arr[i].eyesColor = getRandomElement(eyesColors);
  }
  return arr;
};

var createWizardElement = function (obj) {
  var wizard = wizardTemplate.cloneNode(true);
  wizard.querySelector('.setup-similar-label').textContent = obj.name;
  wizard.querySelector('.wizard-coat').style.fill = obj.coatColor;
  wizard.querySelector('.wizard-eyes').style.fill = obj.eyesColor;
  return wizard;
};

var renderWizards = function (arrOfObjs, block) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < arrOfObjs.length; i++) {
    fragment.appendChild(createWizardElement(arrOfObjs[i]));
  }
  block.appendChild(fragment);
};

var wizards = createWizards(wizardNames, wizardSurnames, wizardCoatColors, wizardEyesColors);
renderWizards(wizards, setupSimilarList);
setup.classList.remove('hidden');
setupSimilar.classList.remove('hidden');

