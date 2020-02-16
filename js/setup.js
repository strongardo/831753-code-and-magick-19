'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupClose = setup.querySelector('.setup-close');
  var setupUserName = setup.querySelector('.setup-user-name');
  var setupOpen = document.querySelector('.setup-open');
  var setupTop = '80px';
  var setupLeft = '50%';

  var onPopupEscapePress = function (evt) {
    if (evt.key === 'Escape' && evt.target !== setupUserName) {
      closePopup();
    }
  };

  var openPopup = function () {
    setup.style.top = setupTop;
    setup.style.left = setupLeft;
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscapePress);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscapePress);
  };

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
})();
