'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupWizard = setup.querySelector('.setup-wizard');
  var setupWizardCoat = setupWizard.querySelector('.wizard-coat');
  var setupWizardEyes = setupWizard.querySelector('.wizard-eyes');
  var setupWizardFireball = setup.querySelector('.setup-fireball-wrap');
  var form = setup.querySelector('.setup-wizard-form');
  var coatInput = setup.querySelector('input[name="coat-color"]');
  var eyesInput = setup.querySelector('input[name="eyes-color"]');
  var fireballInput = setup.querySelector('input[name="fireball-color"]');
  var wizardCoatColors = ['rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)', 'rgb(101, 137, 164)'];
  var wizardEyesColors = ['red', 'blue', 'yellow', 'green', 'black'];
  var wizardFireballColors = ['#30a8ee', '#5ce6c0', '#e848d5', '#e6e848', '#ee4830'];
  var changeColor = window.utils.changeColor;

  setupWizardCoat.addEventListener('click', function () {
    changeColor(wizardCoatColors, setupWizardCoat, coatInput);
  });

  setupWizardEyes.addEventListener('click', function () {
    changeColor(wizardEyesColors, setupWizardEyes, eyesInput);
  });

  setupWizardFireball.addEventListener('click', function () {
    changeColor(wizardFireballColors, setupWizardFireball, fireballInput);
  });

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      setup.classList.add('hidden');
    });
    evt.preventDefault();
  });
})();
