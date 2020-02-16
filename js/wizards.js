'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupSimilar = document.querySelector('.setup-similar');
  var setupSimilarList = setup.querySelector('.setup-similar-list');
  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var data = window.data.wizards;

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

  renderWizards(data, setupSimilarList);

  setupSimilar.classList.remove('hidden');
})();
