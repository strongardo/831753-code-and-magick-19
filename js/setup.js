'use strict';

var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var setupUserName = setup.querySelector('.setup-user-name');
var setupWizard = setup.querySelector('.setup-wizard');
var setupWizardCoat = setupWizard.querySelector('.wizard-coat');
var setupWizardEyes = setupWizard.querySelector('.wizard-eyes');
var setupWizardFireball = setup.querySelector('.setup-fireball-wrap');
var coatInput = setup.querySelector('input[name="coat-color"]');
var eyesInput = setup.querySelector('input[name="eyes-color"]');
var fireballInput = setup.querySelector('input[name="fireball-color"]');
var setupOpen = document.querySelector('.setup-open');
var setupSimilar = document.querySelector('.setup-similar');
var setupSimilarList = setup.querySelector('.setup-similar-list');
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardCoatColors = ['rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)', 'rgb(101, 137, 164)'];
var wizardEyesColors = ['red', 'blue', 'yellow', 'green', 'black'];
var wizardFireballColors = ['#30a8ee', '#5ce6c0', '#e848d5', '#e6e848', '#ee4830'];
var wizardsQuantity = 4;
var colorIndex = 0;

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

var onPopupEscapePress = function (evt) {
  if (evt.key === 'Escape' && evt.target !== setupUserName) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscapePress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscapePress);
};

var changeColor = function (arr, element, input) {
  colorIndex = (colorIndex > arr.length - 1) ? 0 : colorIndex;
  var color = arr[colorIndex];
  colorIndex++;
  // var color = getRandomElement(arr);
  if (element.style.fill) {
    element.style.fill = color;
  } else {
    element.style.backgroundColor = color;
  }
  input.value = color;
};

var wizards = createWizards(wizardNames, wizardSurnames, wizardCoatColors, wizardEyesColors);
renderWizards(wizards, setupSimilarList);
setupSimilar.classList.remove('hidden');

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

setupWizardCoat.addEventListener('click', function () {
  changeColor(wizardCoatColors, setupWizardCoat, coatInput);
});

setupWizardEyes.addEventListener('click', function () {
  changeColor(wizardEyesColors, setupWizardEyes, eyesInput);
});

setupWizardFireball.addEventListener('click', function () {
  changeColor(wizardFireballColors, setupWizardFireball, fireballInput);
});


