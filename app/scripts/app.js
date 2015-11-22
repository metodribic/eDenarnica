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
    'ngTouch',
    'uiGmapgoogle-maps',
    'webcam'
  ])
  .config(function ($routeProvider) {
    $routeProvider

      .when('/vpis', {
        templateUrl: 'views/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })

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

      .otherwise({ redirectTo: '/' });

  });
