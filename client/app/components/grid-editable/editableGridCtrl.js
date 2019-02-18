mainApp.controller("editableGridCtrl", ['$scope', 'complexdata', 'savedata','uiGridValidateService', function ($scope, complexdata, savedata, uiGridValidateService) {

    $scope.edit = function (row) {
        var index = $scope.gridOptions.data.indexOf(row);
        $scope.gridOptions.data[index].editrow = !$scope.gridOptions.data[index].editrow;
    };

    $scope.cancelEdit = function (row) {
        var index = $scope.gridOptions.data.indexOf(row);
        $scope.gridOptions.data[index].editrow = false;
        bootbox.alert({
            size: "small",
            message: "Row edit cancelled"
        })
    };

    //Class to hold the customer data
    $scope.Customer = {
        name: '',
        gender: '',
        age: '',
        company: ''
    };
    $scope.saveRow = function (row) {
        var index = $scope.gridOptions.data.indexOf(row);
        $scope.gridOptions.data[index].editrow = false;

        $scope.Customer.name = row.name;
        $scope.Customer.age = row.age;
        $scope.Customer.gender = row.gender;
        $scope.Customer.company = row.company;

        //Call the function to save the data to database
        var savedataurl = 'http://localhost:3001/api/updatedata?catagory=dummydata.json'
        savedata.save($scope.Customer, savedataurl).then(function (d) {
            bootbox.alert({
                size: "small",
                message: "Data saved successfully"
            });
        }, function (d) {
            bootbox.alert({
                size: "small",
                message: "Some error occured"
            });
        });
    };
    //Get function to populate the UI-Grid
    $scope.GetCustomer = function () {
        $scope.gridOptions = {
            columnDefs: [
                {
                    name: "name", displayName: "name", field: "name"
                },
                {
                    name: "gender", displayName: "gender", field: "gender",

                },
                {
                    name: "age", displayName: "age", field: "age",
                    cellTemplate: '<div class="ui-grid-cell-contents" ng-if="!row.entity.editrow">{{COL_FIELD}}</div><div ng-if="row.entity.editrow"><input class="ui-grid-cell-contents" type="text" style="height:30px" ng-model="MODEL_COL_FIELD"</div>', width: 140
                },
                {
                    name: "company", displayName: "company", field: "company",
                    cellTemplate: '<div class="ui-grid-cell-contents" ng-if="!row.entity.editrow">{{COL_FIELD}}</div><div ng-if="row.entity.editrow"><input class="ui-grid-cell-contents" type="text" style="height:30px" ng-model="MODEL_COL_FIELD"</div>', width: 140
                },
                {
                    name: 'Actions', field: 'edit', enableFiltering: false, enableSorting: false,
                    cellTemplate: '<div><button ng-show="!row.entity.editrow" class="btn primary" ng-click="grid.appScope.edit(row.entity)"><i title="Edit" class="fa fa-edit"></i></button>' +  //Edit Button
                        '<button ng-show="row.entity.editrow" class="btn primary" ng-click="grid.appScope.saveRow(row.entity)"><i title="Save" class="fa fa-floppy-o"></i></button>' +//Save Button
                        '<button ng-show="row.entity.editrow" class="btn primary" ng-click="grid.appScope.cancelEdit(row.entity)"><i title="Cancel" class="fa fa-times"></i></button>' + //Cancel Button
                        '</div>', width: 100
                }
            ],
            onRegisterApi: function (gridApi) {
                $scope.gridApi = gridApi;
            }
        };
        console.log($scope.age, $scope.company);
        
        var url = 'http://localhost:3001/api/getjsondata?catagory=dummydata.json';
        complexdata.data(url).then(function (data) {
            $scope.gridOptions.data = data;
        });
    };
    $scope.GetCustomer();
}]);

