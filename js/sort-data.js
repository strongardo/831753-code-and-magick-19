'use strict';

(function () {

  window.getSortData = function (coatColor, eyesColor) {
    var serverData = window.serverData;

    var getRank = function (obj) {
      var rank = 0;
      if (obj.colorCoat === coatColor) {
        rank += 2;
      }
      if (obj.colorEyes === eyesColor) {
        rank += 1;
      }
      return rank;
    };

    var sortData = serverData.sort(function (left, right) {
      if (getRank(left) > getRank(right)) {
        return -1;
      }
      if (getRank(left) < getRank(right)) {
        return 1;
      }
      return 0;
    });

    return sortData;
  };
})();
