'use strict';

/**
 * Controller for editin user settings
 */
angular.module('eDenarnicaApp')
	.controller('UserController', ['$scope', function($scope) {
		var _video = null;
		var patData = null;

		// TODO: GET USER
		
		/* Objekt uporabnik */
		$scope.user = {
			name: 'Metod',
			surname: 'Ribič',
			username: 'metod',
			email: 'metod.ribic@gmail.com',
			balance: 15.346,
			savings: 350
		};

		/* Edit user */
		$scope.edit = false;

		/* dovoli uporabniku da spremeni svoje osebne podatke */
		$scope.editUser = function() {
    		$scope.edit = true;
  		};

  		/* posodobi uporabnika */
  		$scope.updateUser = function() {
    		$scope.edit = false;
  		};

  		$scope.onSuccess = function () {
        // The video element contains the captured camera data
	        _video = $scope.channel.video;
	        $scope.$apply(function() {
	            $scope.patOpts.w = _video.width;
	            $scope.patOpts.h = _video.height;
	            $scope.showDemos = true;
	        });
	    };

  		$scope.makeSnapshot = function makeSnapshot() {
        	if (_video) {
	            var patCanvas = document.querySelector('#snapshot');
	            if (!patCanvas){
	            	return;
	            } 

	            patCanvas.width = _video.width;
	            patCanvas.height = _video.height;
	            var ctxPat = patCanvas.getContext('2d');

	            var idata = getVideoData($scope.patOpts.x, $scope.patOpts.y, $scope.patOpts.w, $scope.patOpts.h);
	            ctxPat.putImageData(idata, 0, 0);

	            //sendSnapshotToServer(patCanvas.toDataURL());

	            patData = idata;
        	}
    	};

    	var getVideoData = function getVideoData(x, y, w, h) {
	        var hiddenCanvas = document.createElement('canvas');
	        hiddenCanvas.width = _video.width;
	        hiddenCanvas.height = _video.height;
	        var ctx = hiddenCanvas.getContext('2d');
	        ctx.drawImage(_video, 0, 0, _video.width, _video.height);
	        return ctx.getImageData(x, y, w, h);
    	};


  	}]);
