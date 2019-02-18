mainApp.controller("gridfreezeCtrl", ['$scope', 'complexdata', function ($scope, complexdata) {

    $scope.gridOptions = {
        superColDefs: [{
            name: 'group1',
            displayName: 'Group 1'
        }, {
            name: 'group2',
            displayName: 'Group 2'
        }],
        columnDefs: [
            { name: 'id', width:100, enablePinning:true, hidePinLeft: false, hidePinRight: true },
            { name: 'name', width:100, pinnedLeft:true },
            { name: 'age', width:100 },
            { name: 'address.city', width:120 },
            { field: 'company', width:100 },
            { field: 'email', width:200 },
            { field: 'phone', width:150 },
            { name: 'age', width:100 },
            { name: 'address.city', width:120 },
            { field: 'company', width:100 },
            { field: 'email', width:200 },
            { field: 'phone', width:150 }]
    };

    var url = 'http://localhost:3001/api/getdata?catagory=500_complex.json';
    var data = complexdata.data(url).then(function (data) {
        $scope.complexdata = data;
        $scope.gridOptions.data = data;
    });
}]);
