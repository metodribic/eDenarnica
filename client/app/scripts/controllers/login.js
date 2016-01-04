'use strict';

/**
 * Controller for editin user settings
 */
angular.module('eDenarnicaApp')
	.controller('LoginController', ['$scope', '$rootScope', 'AUTH_EVENTS', 'AuthService', function($scope, $rootScope, AUTH_EVENTS, AuthService) {

		// TODO: GET USER


		$scope.credentials = {
		    username: '',
		    password: ''
		};

		$rootScope.loggedUser = null;

		$scope.register = false;
		/* Objekt uporabnik */
		$scope.user = {
			name: 'Metod',
			surname: 'Ribič',
			username: 'metod',
			email: 'metod.ribic@gmail.com',
			balance: 15.346,
			savings: 350
		};


		$scope.registerUser = function(){
			$scope.register = true;
		};

		$scope.registerCancel = function(){
			$scope.register = false;
		};
		/*
		$scope.login = function(credentials) {
			console.log(credentials);
		};
		*/

		$scope.login = function (credentials) {
		    AuthService.login(credentials).then(function (user) {
		      $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
		      //$scope.setCurrentUser(user);
		    }, function () {
		      $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
		    });
		 };

  	}]);
