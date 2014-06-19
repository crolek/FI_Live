angular.module('frenemy').controller('index', function($scope, $rootScope, $firebase, $location) {
    var ref = new Firebase('https://torid-fire-513.firebaseio.com/');

    $scope.signIn = function () {
        new FirebaseSimpleLogin(ref, function(err, user) {
            if(err) {
                console.log(err);
            } else {
                $location.path("/assessment");
            }
        });
    }
});