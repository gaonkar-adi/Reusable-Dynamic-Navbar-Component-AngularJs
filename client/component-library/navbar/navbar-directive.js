var navModule = angular.module('navbarModule', []);
navModule.directive('navbarDirective', ['$compile','$templateRequest', function ($compile,$templateRequest) {
    return {
        scope: {
            navdata: "="
        },
        link: function (scope, element, attrs) {
            scope.template = 'component-library/navbar/navbar-template.html';
            $templateRequest(scope.template)
                .then(function(html){
                    var template = angular.element(html);
                    element.append(template);
                    $compile(template)(scope);
                });
        }
    };
}]);
