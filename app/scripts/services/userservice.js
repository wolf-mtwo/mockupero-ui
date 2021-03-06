'use strict';

/**
 * @ngdoc service
 * @name mockuperApp.userService
 * @description
 * # userService
 * Service in the mockuperApp.
 */
angular.module('mockuperApp')
    .service('userService', function($resource) {
        var fac = {};
        fac.user = $resource('http://localhost:1337/user', {}, {
            get: {
                method: 'GET',
                isArray: true
            }
        });

        fac.projectPermission = $resource('http://localhost:1337/project/projectPermission', {}, {
            get: {
                method: 'GET'
            }
        });

        fac.permission = $resource('http://localhost:1337/permission', {}, {
            get: {
                method: 'GET',
                isArray: true
            }
        });

        fac.createUser = $resource('http://localhost:1337/user/', {}, {
            save: {
                method: 'POST'
            }
        });

        fac.updateUser = $resource('http://localhost:1337/user/:id', {}, {
            save: {
                method: 'PUT'
            }
        });

        fac.userById = $resource('http://localhost:1337/user/:userId', {
            userId: '@id'
        }, {
            get: {
                method: 'GET'
            }
        });

        fac.deleteUser = $resource('http://localhost:1337/user/:id', {}, {
            delete: {
                method: 'DELETE'
            }
        });
        return fac;
    });
