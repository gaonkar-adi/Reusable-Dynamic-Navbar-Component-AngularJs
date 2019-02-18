
mainApp.controller('griddemoCtrl', ['$scope','complexdata', function($scope, complexdata) {
    
    var url = 'http://localhost:3001/api/getjsondata?catagory=dummydata.json';
    complexdata.data(url).then(function (data) {
        $scope.demodata = data;
    });
}]);