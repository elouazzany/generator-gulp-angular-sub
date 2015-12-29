(function() {
  'use strict';

  angular
    .module('<%= appName %>')
    .factory('<%= serviceName %>', <%= serviceName %>);

  /** @ngInject */
  function <%= serviceName %>() {
    return function () {
      
    };
  }
})();
