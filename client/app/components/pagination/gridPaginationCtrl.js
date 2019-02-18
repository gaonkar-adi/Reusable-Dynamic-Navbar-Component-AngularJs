mainApp.controller("gridPaginationCtrl", ['$scope', 'uiGridConstants', 'complexdata', function ($scope, uiGridConstants, complexdata) {

    var url = 'http://localhost:3001/api/getdata?catagory=100.json';

    $scope.gridOptions1 = {
        useCustomPagination: true,
        enablePaging : true,
        showFooter: true,
        paginationPageSize: 10,
        totalItems: 100,
        columnDefs: [
            { name: 'name', enableSorting: false },
            { name: 'gender', enableSorting: false },
            { name: 'company', enableSorting: false }
        ]
    };

    complexdata.data(url).then(function (data) {
        $scope.gridOptions1.data = data;
        $scope.gridOptions1.paginationPageSizes = calculatePageSizes(data);
    });

    function calculatePageSizes(data) {
        var initials = [];
        var datacount = data.length;
        var dataPerPage = $scope.gridOptions1.paginationPageSize;
        var pagecount = ((datacount % dataPerPage) == 0) ? datacount/dataPerPage : (datacount/dataPerPage + 1);
        for(i=0; i<pagecount; i++) {
            initials.push(dataPerPage);
        }
        return initials;

    }


}]);
