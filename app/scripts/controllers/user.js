'use strict';

/**
 * Controller for editin user settings
 */
angular.module('eDenarnicaApp')
	.controller('UserController', ['$scope', function($scope) {
		// uporabnik
		$scope.user = {
			name: 'Metod',
			surname: 'Ribič',
			username: 'metod',
			email: 'metod.ribic@gmail.com'
		};

		// Edit user
		$scope.edit = false;

		$scope.editUser = function() {
    		$scope.edit = true;
  		};
  	}]);
