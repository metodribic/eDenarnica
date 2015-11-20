'use strict';

/**
 * Controller for editin user settings
 */
angular.module('eDenarnicaApp')
	.controller('LoginController', ['$scope', '$location', function($scope, $location) {

		// TODO: GET USER
		
		/* Objekt uporabnik */
		$scope.user = {
			name: 'Metod',
			surname: 'Ribič',
			username: 'metod',
			email: 'metod.ribic@gmail.com',
			balance: 15.346,
			savings: 350
		};

		$scope.test = 'test';

		$scope.login = function(){
			if(true){
				$location.path( '#/' );
			}
		};
  	}]);
