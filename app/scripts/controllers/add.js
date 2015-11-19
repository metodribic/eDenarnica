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
			opis: '',
			oznake: [],
			kolicina: 0,
			datum: null 
		};

		$scope.addExpenses = function(){
			$scope.test ='test';
			// TODO post
		};
}]);

