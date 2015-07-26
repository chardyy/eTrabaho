'use strict';

/**
 * @ngdoc overview
 * @name eTrabahoApp
 * @description
 * # eTrabahoApp
 *
 * Main module of the application.
 */
angular
  .module('eTrabahoApp')
  .config(function($urlRouterProvider, $stateProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: '/views/main.html'
      })
      .state('register', {
      url: '/register',
      templateUrl: '/views/register.html'
    });

  });
