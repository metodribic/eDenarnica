'use strict';

angular.module('eDenarnicaApp', [])
  .service('Session', function () {
      this.create = function (sessionId, userId, userRole) {
        this.id = sessionId;
        this.userId = userId;
        this.userRole = userRole;
      };
      this.destroy = function () {
        this.id = null;
        this.userId = null;
        this.userRole = null;
      };

      this.get = function(){
        return {
          userId: this.userId;
          userToken: this.id;
        }
      };
  });