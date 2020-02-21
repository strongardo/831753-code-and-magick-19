'use strict';

(function () {
  var WIZARDS_COUNT = 4;
  var setup = document.querySelector('.setup');
  var setupSimilar = document.querySelector('.setup-similar');
  var setupSimilarList = setup.querySelector('.setup-similar-list');
  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var createWizardElement = function (obj) {
    var wizard = wizardTemplate.cloneNode(true);
    wizard.querySelector('.setup-similar-label').textContent = obj.name;
    wizard.querySelector('.wizard-coat').style.fill = obj.colorCoat;
    wizard.querySelector('.wizard-eyes').style.fill = obj.colorEyes;
    return wizard;
  };

  var removeWizards = function () {
    var wizards = setupSimilarList.querySelectorAll('.setup-similar-item');
    if (wizards) {
      wizards.forEach(function (item) {
        item.remove();
      });
    }
  };

  window.renderWizards = function (data) {
    removeWizards();
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < WIZARDS_COUNT; i++) {
      var element = data[i];
      fragment.appendChild(createWizardElement(element));
    }

    setupSimilarList.appendChild(fragment);
    setupSimilar.classList.remove('hidden');
  };
})();
