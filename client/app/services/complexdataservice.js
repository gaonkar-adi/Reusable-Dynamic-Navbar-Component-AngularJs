mainApp.service("complexdata", function($http) {
    this.data = function(url) {
       return $http.get(url)
            .then(function(response) {
                return response.data;
            });
    }
});

mainApp.service("savedata", function($http) {
    this.save = function(data, url) {
        return $http ({
            method: 'PUT',
            url: url,
            data: data
        }).then(function(response) {
            console.log(response.data);
            return response.data;
        })
    }
});
