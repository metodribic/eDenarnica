'use strict';

/**
 * Controller for editin user settings
 */
angular.module('eDenarnicaApp', [])
	.controller('IndexController', ['$scope', '$location','$rootScope', function($scope, $location, $rootScope) {

		// TODO: GET USER

		$rootScope.loggedUser = null;

		
		/* Objekt uporabnik */
		$scope.user = {
			name: 'Metod',
			surname: 'Ribič',
			username: 'metod',
			email: 'metod.ribic@gmail.com',
			balance: 15.346,
			savings: 350
		};
		//$scope.register = false;
		$scope.register = $scope.user;

		$scope.registerUser = function(){
			$scope.register = true;
		};

		$scope.registerCancel = function(){
			$scope.register = false;
		};

		$scope.login = function() {
			$rootScope.loggedUser = $scope.user;
			$location.path('/');
			console.log($rootScope.loggedUser);
		};
  	}]);
