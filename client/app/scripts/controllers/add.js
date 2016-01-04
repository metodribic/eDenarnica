'use strict';

/**
 * Controller for adding in/outcomes
 */
angular.module('eDenarnicaApp')
	.controller('AddController', ['$scope', 'Capital', '$rootScope', function($scope, Capital, $rootScope) {
		$scope.map = { center: { latitude: 46.0569465, longitude: 14.5057515 }, zoom: 8 };
		/* doadatne možnosti */
		$scope.advanced = false;

		/* izdatek */
		$scope.expense = {
			amount: null,
			createdAt: null,
			date: null,
			description: null,
			lastUpdated: null,
			created: null,
			notes: null,
			tags: null,
			transaction: 'cash',
			type: 'odliv',
			userId: ''
		};

		/* dodaj izdatek */
		$scope.addExpenses = function(){
			$scope.expense.userId = $rootScope.user.id;
			$scope.expense.tags = $scope.expense.tags.split(',');
			$scope.expense.created = new Date();
			$scope.expense.lastUpdated = new Date();
			$scope.expense.date = new Date();

			Capital.create($scope.expense).$promise.then(function(response){
				console.log(response);
			});
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

