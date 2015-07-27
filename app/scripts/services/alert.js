(function(){
  'use strict';

  /**
   * @ngdoc service
   * @name eTrabahoApp.alert
   * @description
   * # alert
   * Service in the eTrabahoApp.
   */
  angular.module('eTrabahoApp')
    .factory('alert', function($rootScope, $timeout) {
      var alertTimeout;
      return function(type, title, message, timeout){
        $rootScope.alert = {
          hasBeenShown: true,
          show: true,
          type: type,
          message: message,
          title: title
        };
        $timeout.cancel(alertTimeout);
        alertTimeout = $timeout(function(){
          $rootScope.alert.show = false;
        }, timeout || 2000);
      };

    });

})();
