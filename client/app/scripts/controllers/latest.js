'use strict';

/**
 * Controller for latest in/outcomes
 */
angular.module('eDenarnicaApp')
	.controller('LatestController', ['$scope', 'Capital', '$rootScope', function($scope, Capital, $rootScope) {
		$scope.latest = null;
		$scope.limit = 10;
		$scope.offset = 0;
		//get user latest in/outcomes
		Capital.find({ where: {userId:$rootScope.user.id} }).$promise.then(function(response){
			$scope.latest = response;
			console.log($scope.latest);
		});
  	}]);

//{ limit: $scope.limit, skip: $scope.offset}