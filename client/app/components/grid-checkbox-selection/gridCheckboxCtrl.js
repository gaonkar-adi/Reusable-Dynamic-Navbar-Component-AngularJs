mainApp.controller('gridcheckboxCtrl', ['$scope', 'complexdata','uiGridExporterService', 'uiGridExporterConstants', function ($scope, complexdata, uiGridExporterService, uiGridExporterConstants) {

    $scope.gridOptions = {
        enableRowSelection: true,
        enableSelectAll: true,
        selectionRowHeaderWidth: 35,
        rowHeight: 35,
        showGridFooter: false,
        multiSelect: true,
        columnDefs: [
            { name: 'id' },
            { name: 'name' },
            { name: 'age' },
            { name: 'address.city' }],
        enableGridMenu: false,
        enableSelectAll: true,
        exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
        onRegisterApi: function (gridApi) {
            $scope.gridApi = gridApi;
        }
        
    };

    $scope.exportCsv = function (choice) {
        var grid = $scope.gridApi.grid;
        var rowTypes = choice ? uiGridExporterConstants.ALL : uiGridExporterConstants.SELECTED;
        var colTypes = choice ? uiGridExporterConstants.ALL : uiGridExporterConstants.SELECTED;
        uiGridExporterService.csvExport(grid, rowTypes, colTypes);
    };
    

    var url = 'http://localhost:3001/api/getdata?catagory=500_complex.json';
    var data = complexdata.data(url).then(function (data) {
        $scope.complexdata = data;
        $scope.gridOptions.data = data;
        if ($scope.gridApi.selection.selectRow) {
            $scope.gridApi.selection.selectRow($scope.gridOptions.data[0]);
        }
    });
}]);
