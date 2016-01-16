'use strict';

/**
 * Controller for adding in/outcomes
 */
angular.module('eDenarnicaApp')
	.controller('ExpensesController', ['$scope','Capital', '$rootScope', function($scope, Capital, $rootScope) {
		$scope.searchType = '';
		$scope.query = '';
		$scope.expenses = [];

		Capital.find({
				filter: {
					where: { userId:$rootScope.user.id }
				}})
		.$promise.then(function(response){
			$scope.expenses = response;
		});

		/* Nastavi po čem iskati, default je po vsem */
		$scope.setSearch = function(searchType) {
			$scope.searchType = searchType;
		};

		$scope.search = function(){
			Capital.find({
				filter: {
					where: { 
						userId:$rootScope.user.id,
					 },
					limit: $scope.limit,
					skip: $scope.offset,
					order: 'created DESC'
				}
			})
			.$promise.then(function(response){
				$scope.expenses = response;
			});
		}
}]);

