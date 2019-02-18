mainApp.controller("gridFilterCtrl", ['$scope', 'complexdata', 'uiGridConstants', function ($scope, complexdata, uiGridConstants) {
    
    var today = new Date();
    var nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);

    $scope.gridOptions = {
        enableFiltering: true,
        onRegisterApi: function (gridApi) {
            $scope.gridApi = gridApi;
        },
        columnDefs: [
            { field: 'name' },
            {
                field: 'gender',
                filterHeaderTemplate: '<div class="ui-grid-filter-container" ng-repeat="colFilter in col.filters"><div my-custom-dropdown></div></div>',
                filter: {
                    term: 1,
                    options: [{ id: 1, value: 'male' }, { id: 2, value: 'female' }]     // custom attribute that goes with custom directive above 
                },
                cellFilter: 'mapGender'
            },
            { field: 'company', enableFiltering: false },
            { field: 'email', enableFiltering: false },
            { field: 'phone', enableFiltering: false },
            {
                field: 'age',
                filterHeaderTemplate: '<div class="ui-grid-filter-container" ng-repeat="colFilter in col.filters"><div my-custom-modal></div></div>'
            }
        ]
    };
    var url = 'http://localhost:3001/api/getdata?catagory=500_complex.json';
    var data = complexdata.data(url).then(function (data) {
        $scope.complexdata = data;
        $scope.gridOptions.data = data;

        data.forEach(function addDates(row, index) {
            row.gender = row.gender === 'male' ? '1' : '2';
        });
    });

}]);
