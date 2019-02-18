mainApp.controller("homeController", ['$scope', 'navbarservice', function (scope, navbarservice) {

    (function () {
        let url = "http://localhost:3001/api/getjsondata?catagory=menu.json";
        navbarservice.getNavbarData(url)
            .then(function (data) {
                scope.navdata = data.data[0];
            })
    })();
}])
