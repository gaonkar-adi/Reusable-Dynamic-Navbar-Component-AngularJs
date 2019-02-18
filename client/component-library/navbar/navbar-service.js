var navServiceModule = angular.module('navbarServiceModule', ['httpServiceModule']);
navServiceModule.service('navbarservice', ['httpService', function(httpService) {
    this.getNavbarData = function(navbarUrl) {
        return httpService.get(navbarUrl);
    }
}]);
