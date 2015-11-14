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

      .when('/about', {
        templateUrl: 'views/first.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })

      .when('/add', {
        templateUrl: 'views/add.html',
        controller: 'AddController',
        controllerAs: 'add'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
