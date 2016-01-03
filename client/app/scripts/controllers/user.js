'use strict';

/**
 * Controller for editin user settings
 */
angular.module('eDenarnicaApp')
	.controller('UserController', ['$scope', '$state', 'User', '$rootScope', function($scope, $state, User, $rootScope) {
		
		/* pridobi uporabnika iz rootScopa, ki se nastavi pri loginu */
		$scope.user = $rootScope.user;

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
