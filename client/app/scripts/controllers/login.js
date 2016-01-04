'use strict';

/**
 * Controller for editin user settings
 */
angular.module('eDenarnicaApp')
	.controller('LoginController', ['$scope', '$rootScope', 'AUTH_EVENTS', 'AuthService', 'User', function($scope, $rootScope, AUTH_EVENTS, AuthService, User) {

		// TODO: GET USER


		$scope.credentials = {
		    username: '',
		    password: ''
		};

		$rootScope.loggedUser = null;

		$scope.register = false;
		/* Objekt uporabnik */
		$scope.newUser = {
			firstname: null,
			lastname: null,
			username: null,
			email: null,
			role: 'user',
			savings: 0,
			balance: 0,
			tags: [],
			password: null
		};



		$scope.registerUser = function(){
			$scope.newUser.username = $scope.credentials.username;
			$scope.newUser.password = $scope.credentials.password;
			//console.log($scope.newUser);
			User.create($scope.newUser).$promise.then(function(response){
				$scope.login($scope.credentials);
			});

		};

		$scope.registerEnable = function(){
			$scope.register = true;
		};

		$scope.registerCancel = function(){
			$scope.register = false;
		};


		$scope.login = function (credentials) {
		    AuthService.login(credentials).then(function (user) {
		      $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
		      //$scope.setCurrentUser(user);
		    }, function () {
		      $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
		    });
		 };

  	}]);
