mainApp.controller('gridGroupingCtrl', ['$scope', 'complexdata', 'uiGridGroupingConstants', function ($scope, complexdata, uiGridGroupingConstants) {

    $scope.gridOptions = {
        treeRowHeaderAlwaysVisible: false,
        columnDefs: [
            { name: 'name', width: '20%' },
            { name: 'gender', width: '10%'},
            { name: 'age', treeAggregationType: uiGridGroupingConstants.aggregation.MAX, width: '20%' },
            { name: 'company', width: '25%' },
            { name: 'registered', width: '40%', cellFilter: 'date', type: 'date' },
            { name: 'state', grouping: { groupPriority: 0 }, sort: { priority: 0, direction: 'asc' }, width: '25%', cellTemplate: '<div><div ng-if="!col.grouping || col.grouping.groupPriority === undefined || col.grouping.groupPriority === null || ( row.groupHeader && col.grouping.groupPriority === row.treeLevel )" class="ui-grid-cell-contents" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div></div>' }
        ],
        onRegisterApi: function (gridApi) {
            $scope.gridApi = gridApi;
        }
    };

    var url = 'http://localhost:3001/api/getdata?catagory=500_complex.json';
    var data = complexdata.data(url).then(function (data) {
        $scope.complexdata = data;
        for ( var i = 0; i < data.length; i++ ){
            var registeredDate = new Date( data[i].registered );
            data[i].state = data[i].address.state;
            data[i].registered = new Date( registeredDate.getFullYear(), registeredDate.getMonth(), 1 )
          }
          delete data[2].age;
        $scope.gridOptions.data = data;
    });
}]);
