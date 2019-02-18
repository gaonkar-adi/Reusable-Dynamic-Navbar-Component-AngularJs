mainApp.directive("myCustomDropdown", function() {
    return {
        template: '<select class="form-control" ng-model="colFilter.term" ng-options="option.id as option.value for option in colFilter.options"></select>'
    }
})