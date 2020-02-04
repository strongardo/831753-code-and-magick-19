'use strict';

var setup = document.querySelector('.setup');
var setupSimilar = document.querySelector('.setup-similar');
var setupSimilarList = document.querySelector('.setup-similar-list');
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var wizardsQuantity = 4;

var getRandomElement = function (arr) {
  return arr[Math.floor(Math.random() * (arr.length))];
};

var createArrOfObjs = function (arr1, arr2, arr3, arr4) {
  var arr = [];
  for (var i = 0; i < wizardsQuantity; i++) {
    arr[i] = {};
    arr[i].name = getRandomElement(arr1) + ' ' + getRandomElement(arr2);
    arr[i].coatColor = getRandomElement(arr3);
    arr[i].eyesColor = getRandomElement(arr4);
  }
  return arr;
};

var wizards = createArrOfObjs(names, surnames, coatColors, eyesColors);

var createDomElement = function (obj) {
  var wizard = wizardTemplate.cloneNode(true);
  wizard.querySelector('.setup-similar-label').textContent = obj.name;
  wizard.querySelector('.wizard-coat').style.fill = obj.coatColor;
  wizard.querySelector('.wizard-eyes').style.fill = obj.eyesColor;
  return wizard;
};

var fillUpBlock = function (arrOfObjs) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < arrOfObjs.length; i++) {
    fragment.appendChild(createDomElement(arrOfObjs[i]));
  }
  setupSimilarList.appendChild(fragment);
};

fillUpBlock(wizards);
setup.classList.remove('hidden');
setupSimilar.classList.remove('hidden');

