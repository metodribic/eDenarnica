'use strict';

/**
 * Controller for editin user settings
 */
angular.module('eDenarnicaApp')
	.controller('EventsController', ['$scope', 'Events', '$rootScope', function($scope, Events, $rootScope) {
		
		Events.find({ filter:{ order: 'created DESC'}}).$promise.then(function(response){
			$scope.events = response;
		});

  	}]);
