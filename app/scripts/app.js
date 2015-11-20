'use strict';

/**
 * @ngdoc overview
 * @name eDenarnicaApp
 * @description
 * # eDenarnicaApp
 *
 * Main module of the application.
 */
angular
  .module('eDenarnicaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/latest.html',
        controller: 'LatestController',
        controllerAs: 'latest'
      })

      .when('/izdatki', {
        templateUrl: 'views/expenses.html',
        controller: 'ExpensesController',
        controllerAs: 'expenses'
      })

      .when('/profil', {
        templateUrl: 'views/user.html',
        controller: 'UserController',
        controllerAs: 'user'
      })
/*
      .when('/prijava', {
        templateUrl: 'login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
*/
      .otherwise({
        redirectTo: '/'
      });

      // use the HTML5 History API
      //$locationProvider.html5Mode(true);
  });
