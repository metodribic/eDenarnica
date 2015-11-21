'use strict';

/**
 * Controller for editin user settings
 */
angular.module('eDenarnicaApp')
	.controller('LoginController', ['$scope', '$rootScope', function($scope, $rootScope) {

		// TODO: GET USER

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

		$scope.login = function() {
			$rootScope.loggedUser = $scope.user;
			console.log($rootScope.loggedUser);
		};
  	}]);
