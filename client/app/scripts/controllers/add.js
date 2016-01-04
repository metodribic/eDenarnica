'use strict';

/**
 * Controller for adding in/outcomes
 */
angular.module('eDenarnicaApp')
	.controller('AddController', ['$scope', 'Capital', '$rootScope', 'User', 'Events', function($scope, Capital, $rootScope, User, Events) {
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

			/* dodamo nov izdatek */
			Capital.create($scope.expense).$promise.then(function(response){
				$scope.znesek = 0;
				/* ustrezno predznačimo znesek*/
				if($scope.expense.type == 'odliv')
					$scope.znesek -= parseFloat($scope.expense.amount);
				else
					$scope.znesek += parseFloat($scope.expense.amount);

				/* posodobimo uporabnikovo stanje - samo $boradcastamo */
				$rootScope.$broadcast('updateCapital');
				console.log(response);

				var tmpEvent = {
		            type: 'createdExpense',
		            created: new Date(),
		            userId: response.userId,
		            metadata: [response]
		         };

		          /* log user login */
		          Events.create(tmpEvent).$promise.then(function(reponse){});

					});
		};

		/* posodobimo uporabnikovo stanje */
		$rootScope.$on('updateCapital', function(){
			var balanceTmp = parseFloat($rootScope.user.balance);
			balanceTmp += parseFloat($scope.znesek);

			/* posodobimo samo polje balance */
			User.prototype$updateAttributes(
				{ id: $rootScope.user.id },
				{ balance: balanceTmp});

			/* popravimo globalno stanje*/
			$rootScope.user.balance = balanceTmp;

		});

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

