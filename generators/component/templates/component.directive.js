(function() {
  'use strict';

  angular
    .module('<%= appName %>')
    .directive('<%= directiveName %>', <%= directiveName %>);

  /** @ngInject */
  function <%= directiveName %>() {
    var directive = {
      restrict: 'E',
      templateUrl: '<%= templateUrl %>',
      scope: {
      },
      link : <%= directiveLink %>,
      controller: <%= directiveController %>,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function <%= directiveController %>() {
      var vm = this;
    }

    function <%= directiveLink %>(scope, element, attrs, controller, transcludeFn) {
    
    }
  }

})();
