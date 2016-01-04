'use strict';

/**
 * Controller for editin user settings
 */
angular.module('eDenarnicaApp')
	.controller('UserController', ['$scope', '$state', 'User', '$rootScope', '$resource', function($scope, $state, User, $rootScope, $resource) {
		
		/* user se deduje iz $rootScopa*/

		/* Edit user */
		$scope.edit = false;

		/* dovoli uporabniku da spremeni svoje osebne podatke */
		$scope.editUser = function() {
    		$scope.edit = true;
  		};

  		/* posodobi uporabnika */
  		$scope.updateUser = function() {
    		$scope.edit = false;
        $rootScope.user.$save();


        console.log($rootScope.user);
        /*
    		User.upsert($rootScope.user).$promise.then(function(response){
    			console.log("User updated!");
    			console.log($rootScope.user);
    		});
        */
  		};


  	}]);
