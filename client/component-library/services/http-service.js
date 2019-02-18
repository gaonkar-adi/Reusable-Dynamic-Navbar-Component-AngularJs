var httpserviceModule = angular.module('httpServiceModule', []);
httpserviceModule.factory('httpService', function ($http, $q) {
    return {
        get: function (url) {
            var deferred = $q.defer();
            $http.get(url)
                .then(function (response) {
                    deferred.resolve(response);
                })
                .catch(function (response) {
                    deferred.reject(response);
                });
            return deferred.promise;
        }
    }
});
