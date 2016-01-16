'use strict';

/**
 * Controller for editin user settings
 */
angular.module('eDenarnicaApp')
	.controller('ApplicationController', ['$scope', '$state', 'User', '$rootScope', 'AUTH_EVENTS', function($scope, $state, User, $rootScope, AUTH_EVENTS) {
		$scope.currentUser = null;
//		$scope.userRoles = USER_ROLES;
		$scope.loggedIn = false;
		
		/* AUTH_EVENTS.loginSuccess -> prikaži stanje */
	    $rootScope.$on(AUTH_EVENTS.loginSuccess, function(){
	      $scope.loggedIn = true;
	    });

	    $scope.logout = function(){
	      $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
	      $scope.loggedIn = false;
	      console.log('logout');
	    };

  	}]);
