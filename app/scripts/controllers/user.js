'use strict';

/**
 * Controller for editin user settings
 */
angular.module('eDenarnicaApp')
	.controller('UserController', ['$scope', function($scope) {
		// tip dohodka
		$scope.user = {
			name: 'Metod',
			surname: 'Ribič',
			username: 'metod',
			email: 'metod.ribic@gmail.com'
		};
  	}]);
