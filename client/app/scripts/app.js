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
        url:'/domov',
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
        url:'/',
        templateUrl: 'views/login.html',
        controller: 'LoginController',
        data: {
          authorizedRoles: ['*']
        }
      })
 }])


  .constant('AUTH_EVENTS', {
      loginSuccess: 'auth-login-success',
      loginFailed: 'auth-login-failed',
      logoutSuccess: 'auth-logout-success',
      sessionTimeout: 'auth-session-timeout',
      notAuthenticated: 'auth-not-authenticated',
      notAuthorized: 'auth-not-authorized'
  })


  .factory('AuthService', function ($http, Session, $rootScope, AUTH_EVENTS, User) {
      var authService = {};
     
      authService.login = function (credentials) {
        return User.login(credentials).$promise.then(function(response){
          console.log(response);
          /* boradcast success */
          $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
          /* create session */
          Session.create(response.id, response.user.id, response.user.role);
          /* set user */
          $rootScope.user = response.user;
          /* set cookie */
          //$cookies.put('eDenarnicaToken',response.id);
          return response.user
        })
        /*
        return $http
          .post('api/users/login', credentials)
          .then(function (response) {
              // broadast da je login uspel 
              $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
              Session.create(response.data.id, 
                             response.data.userId);
              return response.data.userId;
          });
  */
      };
     
      /* preveri če obstaja userId */
      authService.isAuthenticated = function () {
        return !!Session.userId;
      };
     
      authService.isAuthorized = function (authorizedRoles) {
        if (!angular.isArray(authorizedRoles)) {
          authorizedRoles = [authorizedRoles];
        }

        /* preveri če je loginan in ima pravice za dostop do te strani */
        return (authService.isAuthenticated() && authorizedRoles.indexOf(Session.userRole) !== -1);
      };
     
      return authService;
  })


  .service('Session', function () {
      this.create = function (token, userId, userRole) {
        this.id = token;
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
    $rootScope.$on('$stateChangeStart', function (event, next, $cookie) {
      /* če je stran dostopna za vse jo prikaži ne glede na to ali je uporabnik avtenticiran ali ne*/
      if(next.data.authorizedRoles.indexOf('*') == -1){
        /* priodbi vse role, ki so dovoljene/potrebne za dostop do te strani*/
        var authorizedRoles = next.data.authorizedRoles;
        /* če uporabniku ni dovoljen dostop do strani oziroma ni vpisan*/
        if (!AuthService.isAuthorized(authorizedRoles)) {
          event.preventDefault();
          if (AuthService.isAuthenticated()) {
            // user is not allowed
            console.log("Not allowed!")
            $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
          } else {
            // user is not logged in
            console.log("Not logged in!");
            $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
          }
        }
      }

      
    });
    /* AUTH_EVENTS.notAuthenticated -> reddirecet na login state*/
    $rootScope.$on(AUTH_EVENTS.notAuthenticated, function(){
      $state.go('login');
    });

    /* AUTH_EVENTS.loginSuccess -> reddirecet na home state*/
    $rootScope.$on(AUTH_EVENTS.loginSuccess, function(){
      $state.go('home');
    });

  });


