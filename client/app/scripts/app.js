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
    'lbServices',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'uiGmapgoogle-maps',
    'ui.router'
  ])

  

  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('user', {
        url: '/profil',
        templateUrl: 'views/user.html',
        controller: 'UserController',
        data: {
          authorizedRoles: ['admin', 'user']
        }
      })

     .state('home', {
        url:'',
        templateUrl: 'views/latest.html',
        controller: 'LatestController',
        data: {
          authorizedRoles: ['admin', 'user']
        }
      })

     .state('expenses', {
        url:'/izdatki',
        templateUrl: 'views/expenses.html',
        controller: 'ExpensesController',
        data: {
          authorizedRoles: ['admin', 'user']
        }
      })

     .state('login', {
        url:'/vpis',
        templateUrl: 'views/login.html',
        controller: 'LoginController',
        data: {
          authorizedRoles: ['*']
        }
      })
 }])

  .constant('USER_ROLES', {
    all: '*',
    admin: 'admin',
    user: 'user'
  })

  .constant('AUTH_EVENTS', {
      loginSuccess: 'auth-login-success',
      loginFailed: 'auth-login-failed',
      logoutSuccess: 'auth-logout-success',
      sessionTimeout: 'auth-session-timeout',
      notAuthenticated: 'auth-not-authenticated',
      notAuthorized: 'auth-not-authorized'
  })


  .factory('AuthService', function ($http, Session) {
      var authService = {};
     
      authService.login = function (credentials) {
        return $http
          .post('api/users/login', credentials)
          .then(function (response) {
              Session.create(response.data.id, 
                           response.data.user.id,
                           response.data.user.role);
              return res.data.user;
          });
      };
     
      authService.isAuthenticated = function () {
        return !!Session.userId;
        //return '76349r82ui3joh';
      };
     
      authService.isAuthorized = function (authorizedRoles) {
        if (!angular.isArray(authorizedRoles)) {
          authorizedRoles = [authorizedRoles];
        }
        //if(authorizedRoles.indexOf('*') !== -1)
        //  return '567944b594c4658c027808fd';
        return (authService.isAuthenticated() && authorizedRoles.indexOf(Session.userRole) !== -1);
      };
     
      return authService;
  })


  .service('Session', function () {
      this.create = function (sessionId, userId, userRole) {
        this.id = sessionId;
        this.userId = userId;
        this.userRole = userRole;
      };
      this.destroy = function () {
        this.id = null;
        this.userId = null;
        this.userRole = null;
      };
  })


  .run(function ($state, $rootScope, AUTH_EVENTS, AuthService) {
    //$rootScope.logged = false;
    $rootScope.$on('$stateChangeStart', function (event, next) {
      /* če je stran dostopna za vse jo prikaži ne glede na to ali je uporabnik avtenticiran ali ne*/
      if(next.data.authorizedRoles.indexOf('*') == -1){
        /* priodbi vse role, ki so dovoljene/potrebne za dostop do te strani*/
        var authorizedRoles = next.data.authorizedRoles;
          /* če uporabniku ni dovoljen dostop do strani oziroma ni vpisan*/
          if (!AuthService.isAuthorized(authorizedRoles)) {
            event.preventDefault();
            if (AuthService.isAuthenticated()) {
              // user is not allowed
              console.log("you are not allowed to be here!")
              $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
            } else {
              // user is not logged in
              console.log("Not logged in!");
              $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
            }
          }
      }

      /* v primeru da prožimo AUTH_EVENTS.notAuthenticated, reddircetamo na login state*/
      $rootScope.$on(AUTH_EVENTS.notAuthenticated, function(){
        $state.go('login');
      })
    });
  });


