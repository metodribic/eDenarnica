'use strict';

angular.module('eDenarnicaApp', [])
  .constant('USER_ROLES', {
    all: '*',
    admin: 'admin',
    user: 'user'
  });