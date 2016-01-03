'use strict';

/**
 * Controller for editin user settings
 */
angular.module('eDenarnicaApp')
	.controller('UserController', ['$scope', '$state', 'User', function($scope, $state, User) {
		$scope.user = {};
		User.findById({id:'567944b594c4658c027808fd'}).$promise.then(function(response){
			$scope.user = response;
			console.log($scope.user);
		});
		
		/*
		var User = $resource('api/users/:userId', {userId:'@id'});
		User.get({userId:'567944b594c4658c027808fd'}, function(user) {
		  console.log('test');
		});
		*/
		/* Objekt uporabnik */
		/*
		$scope.user = {
			name: 'Metod',
			surname: 'Ribič',
			username: 'metod',
			email: 'metod.ribic@gmail.com',
			balance: 15.346,
			savings: 350
		};
		*/

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
