(function() {
  'use strict';

  angular
    .module('<%= appName %>')
    .filter('<%= filterName %>', <%= filterName %>);

  function <%= filterName %>() {
    return function(input) {
      input = input || '';
      var out = "";
     
      return out;
    };
  }

})();
