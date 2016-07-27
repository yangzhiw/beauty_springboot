 'use strict';

angular.module('beautySpringbootApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-beautySpringbootApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-beautySpringbootApp-params')});
                }
                return response;
            }
        };
    });
