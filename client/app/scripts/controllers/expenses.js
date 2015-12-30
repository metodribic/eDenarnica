'use strict';

/**
 * Controller for adding in/outcomes
 */
angular.module('eDenarnicaApp')
	.controller('ExpensesController', ['$scope', function($scope) {
		$scope.search = null;
		
		/* Nastavi po čem iskati, default je po vsem */
		$scope.setSearch = function(searchType) {
			$scope.search = searchType;
		};
}]);

