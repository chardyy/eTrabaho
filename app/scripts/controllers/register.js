(function(){
  'use strict';

  /**
   * @ngdoc function
   * @name eTrabahoApp.controller:RegisterCtrl
   * @description
   * # RegisterCtrl
   * Controller of the eTrabahoApp
   */
  angular.module('eTrabahoApp')
    .controller('RegisterController', function ($scope, $rootScope, $http, alert) {
        $scope.submit = function(){

          var url = '/';
          var user = {};

          $http.post(url, user)
               .success(function(res){
                    alert('success', 'Okay!', 'Registered as new user');
                })
               .error(function(err){
                    alert('danger', 'Opps!', 'Could not register');
               });
        };
    });

})();
