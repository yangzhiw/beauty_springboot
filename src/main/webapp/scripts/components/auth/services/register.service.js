'use strict';

angular.module('beautySpringbootApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


