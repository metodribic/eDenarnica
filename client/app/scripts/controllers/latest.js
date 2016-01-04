'use strict';

/**
 * Controller for latest in/outcomes
 */
angular.module('eDenarnicaApp')
	.controller('LatestController', ['$scope', 'Capital', '$rootScope', function($scope, Capital, $rootScope) {
		$scope.latest = null;
		$scope.limit = 10;
		$scope.offset = 0;
		
		updateLatest();
		/* if expense was added, update list*/
	    $rootScope.$on('updateCapital', function($scope){
	      updateLatest();
	    });

	    function updateLatest(){
	    	//get user latest in/outcomes
			Capital.find({
				filter: {
					where: { userId:$rootScope.user.id },
					limit: $scope.limit,
					skip: $scope.offset,
					order: 'created DESC'
				}
			})
			.$promise.then(function(response){
					$scope.latest = response;
			});
	    }


  	}]);
