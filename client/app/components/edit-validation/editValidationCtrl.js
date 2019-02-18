mainApp.controller("editValidationCtrl", ['$scope', 'uiGridValidateService', 'complexdata', function ($scope, uiGridValidateService, complexdata) {

    uiGridValidateService.setValidator('startWith',
        function (argument) {
            return function (oldValue, newValue, rowEntity, colDef) {
                if (!newValue) {
                    return true; // We should not test for existence here
                } else {
                    return newValue.startsWith(argument);
                }
            };
        },
        function (argument) {
            return 'You can only insert names starting with: "' + argument + '"';
        }
    );

    $scope.gridOptions = { enableCellEditOnFocus: true };

    $scope.gridOptions.columnDefs = [
        { name: 'id', enableCellEdit: false, width: '10%' },
        {
            name: 'name', displayName: 'Name (editable)', width: '20%',
            validators: { required: true, startWith: 'M' }, cellTemplate: 'ui-grid/cellTitleValidator'
        },
        { name: 'gender',  width: '20%'},
        { 
            name: 'email', editableCellEdit: true, width: '30%',
            validators: { required: true, startWith: 'M' }, cellTemplate: 'ui-grid/cellTitleValidator'
        },
        { name: 'balance',  width: '20%'}
    ];
    $scope.msg = {};

    $scope.gridOptions.onRegisterApi = function (gridApi) {
        //set gridApi on scope
        $scope.gridApi = gridApi;
        gridApi.validate.on.validationFailed($scope, function (rowEntity, colDef, newValue, oldValue) {
            $window.alert('rowEntity: ' + rowEntity + '\n' +
                'colDef: ' + colDef + '\n' +
                'newValue: ' + newValue + '\n' +
                'oldValue: ' + oldValue);
        });
    };

    var url = 'http://localhost:3001/api/getdata?catagory=500_complex.json';
    complexdata.data(url).then(function (data) {
        $scope.gridOptions.data = data;
    });
}])