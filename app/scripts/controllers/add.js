'use strict';

/**
 * Controller for adding in/outcomes
 */
angular.module('eDenarnicaApp')
	.controller('AddController', ['$scope', function($scope) {
		//doadatne možnosti
		$scope.advanced = false;
		// objekt izdatek
		$scope.izdatek = {
			type: 'odliv',
			opis: '',
			oznake: [],
			kolicina: 0,
			datum: null 
		};

		$scope.dodajIzdatek = function(){
			$scope.test ='test';
		};
}]);

