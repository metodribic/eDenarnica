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
        templateUrl: 'views/izdatki.html',
        controller: 'IzdatkiCtrl',
        controllerAs: 'izdatki'
      })

      .when('/profil', {
        templateUrl: 'views/user.html',
        controller: 'UserController',
        controllerAs: 'user'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
