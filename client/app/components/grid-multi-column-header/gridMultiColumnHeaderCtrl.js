mainApp.controller('gridMultiColumnHeaderCtrl', ['$scope', 'complexdata', function ($scope, complexdata) {


    $(document).ready(function () {
        $(".ui-grid-spilt-header-main").css('padding-top', $(".ui-grid-header-table").height());
    });
    $scope.gridOptions = {
        columnDefs: [
            {
                name: 'id',
                headerCellTemplate: "<div class='ui-grid-spilt-header-main'><div class='ui-grid-split-merge-header' style='width:500%'><table class='ui-grid-header-table'><tbody><tr><td colspan='4'>Employee information</td></tr></tbody></table></div>Id</div>"
            },
            {
                name: 'name',
                headerCellTemplate: "<div class='ui-grid-spilt-header-main'>Name</div>"
            },
            {
                name: 'age',
                headerCellTemplate: "<div class='ui-grid-spilt-header-main'>Age</div></div>",
            },
            {
                name: 'address.city',
                headerCellTemplate: "<div class='ui-grid-spilt-header-main'><div class='ui-grid-split-merge-header'><table class='ui-grid-header-table'><tr><th colspan='2'></th></tr></table></div>City</div>"
            },
            {
                name: 'address.state',
                headerCellTemplate: "<div class='ui-grid-spilt-header-main'>State</div></div>",
            }
        ],
        onRegisterApi: function (gridApi) {
            $scope.gridApi = gridApi;
        }

    };
    var url = 'http://localhost:3001/api/getdata?catagory=500_complex.json';
    var data = complexdata.data(url).then(function (data) {
        $scope.complexdata = data;
        $scope.gridOptions.data = data;
    });
}]);
