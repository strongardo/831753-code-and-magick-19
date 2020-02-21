'use strict';

(function () {
  var DEBOUNCE_INTERVAL = 500;
  var setup = document.querySelector('.setup');
  var getSortData = window.getSortData;
  var coatInput = setup.querySelector('input[name="coat-color"]');
  var eyesInput = setup.querySelector('input[name="eyes-color"]');
  var renderWizards = window.renderWizards;
  var lastTimeout;

  var debounce = function (cb) {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(cb, DEBOUNCE_INTERVAL);
  };

  window.updateWizards = function () {
    debounce(function () {
      var data = getSortData(coatInput.value, eyesInput.value);
      renderWizards(data);
    });
  };
})();
