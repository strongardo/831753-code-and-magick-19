'use strict';

(function () {
  var TIMEOUT_IN_MS = 10000;
  var STATUS_CODE_OK = 200;
  var DOWNLOAD_URL = 'https://js.dump.academy/code-and-magick/data';
  var UPLOAD_URL = 'https://js.dump.academy/code-and-magick';
  var renderWizards = window.renderWizards;

  var onDownloadError = function () {
    var node = document.createElement('div');
    node.style = 'z-index: 100; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.textContent = 'Произошла ошибка соединения';
    document.body.insertAdjacentElement('afterbegin', node);
  };

  var onUploadError = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.width = '450px';
    node.style.left = '450px';
    node.style.top = '500px';
    node.style.fontSize = '30px';
    node.textContent = errorMessage;
    document.body.appendChild(node);
    return node;
  };

  var load = function () {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === STATUS_CODE_OK) {
        window.serverData = xhr.response;
        renderWizards(xhr.response);
      } else {
        onDownloadError();
      }
    });

    xhr.addEventListener('error', function () {
      onDownloadError();
    });

    xhr.open('GET', DOWNLOAD_URL);
    xhr.send();
  };

  var save = function (data, onLoad) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      onLoad();
    });

    xhr.addEventListener('error', function () {
      onUploadError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onUploadError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = TIMEOUT_IN_MS;

    xhr.open('POST', UPLOAD_URL);
    xhr.send(data);
  };

  load();

  window.backend = {
    save: save,
  };
})();
