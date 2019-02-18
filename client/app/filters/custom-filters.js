mainApp.filter('mapGender', function() {
    var genderHash = {
      1: 'male',
      2: 'female'
    };
   
    return function(input) {
      if (!input){
        return '';
      } else {
        return genderHash[input];
      }
    };
});

mainApp.filter('maritalFilter', function () {
    var genderHash = {
        'M': 'Married',
        'S': 'Single'
    };

    return function (input) {
        var result;
        var match;
        if (!input) {
            return '';
        } else if (result = genderHash[input]) {
            return result;
        } else if ((match = input.match(/(.+)( \([$\d,.]+\))/)) && (result = genderHash[match[1]])) {
            return result + match[2];
        } else {
            return input;
        }
    };
})