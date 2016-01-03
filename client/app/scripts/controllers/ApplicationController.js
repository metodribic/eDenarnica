'use strict';

/**
 * Controller for editin user settings
 */
angular.module('eDenarnicaApp')
	.controller('ApplicationController', ['$scope', '$state', 'User', function($scope, $state, User, USER_ROLES, AuthService) {
		$scope.currentUser = null;
		$scope.userRoles = USER_ROLES;
		//$scope.isAuthorized = AuthService.isAuthorized;

		$scope.setCurrentUser = function (user) {
		$scope.currentUser = user;
		};
		
  	}]);
