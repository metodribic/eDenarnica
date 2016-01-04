'use strict';

/**
 * Controller for latest in/outcomes
 */
angular.module('eDenarnicaApp')
	.controller('LatestController', ['$scope', 'Capital', function($scope, Capital) {
		$scope.latest = null;
		$scope.limit = 1;
		$scope.offset = 0;
		//get user latest in/outcomes
		Capital.find({ limit: $scope.limit, skip: $scope.offset }).$promise.then(function(response){
			$scope.latest = response;
			console.log($scope.latest);
		});
  	}]);
