'use strict';

/**
 * Controller for editin user settings
 */
angular.module('eDenarnicaApp')
	.controller('UserController', ['$scope', function($scope) {

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

		/* Edit user */
		$scope.edit = false;

		/* dovoli uporabniku da spremeni svoje osebne podatke */
		$scope.editUser = function() {
    		$scope.edit = true;
  		};

  		/* posodobi uporabnika */
  		$scope.updateUser = function() {
    		$scope.edit = false;
  		};


  	}]);
