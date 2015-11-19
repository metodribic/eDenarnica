'use strict';

/**
 * Controller for adding in/outcomes
 */
angular.module('eDenarnicaApp')
	.controller('AddController', ['$scope', function($scope) {
		//doadatne možnosti
		$scope.advanced = false;
		// objekt izdatek
		$scope.expense = {
			type: 'odliv',
			description: '',
			tags: [],
			amount: null,
			date: null,
			transaction: 'cash'
		};

		$scope.addExpenses = function(){
			console.log($scope.expense);
			// TODO post
		};
}]);

