mainApp.controller('gridColumResizingCtrl', [ '$scope', 'complexdata', function($scope, complexdata) {

    $scope.gridOptions = {
        enableSorting: true,
        columnDefs: [
        { field: 'name',width: '40%', enableColumnResizing: false },
        { field: 'gender', width: '30%'},
        { field: 'company', width: '30%' }
        ]
    };

    var url = 'http://localhost:3001/api/getdata?catagory=100.json';
    var data = complexdata.data(url).then(function (data) {
        $scope.complexdata = data;
        $scope.gridOptions.data = data;
    });
}]);
