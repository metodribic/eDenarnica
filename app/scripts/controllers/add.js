'use strict';

/**
 * Controller for adding in/outcomes
 */
angular.module('eDenarnicaApp')
	.controller('AddController', ['$scope', function($scope) {
		$scope.map = { center: { latitude: 46.0569465, longitude: 14.5057515 }, zoom: 8 };
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
			 $scope.expense = {
				type: 'odliv',
				description: '',
				tags: [],
				amount: null,
				date: null,
				transaction: 'cash'
			};
			// TODO post
		};

		$scope.validateDate= function(date) {
			var dateRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

    		if (dateRegex.test(date.value) === false) {
    			return false;
			}
			else{
				return true;
			} 
		};

}]);

