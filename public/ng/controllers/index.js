angular.module('frenemy').controller('index', function($scope, $rootScope, $firebaseSimpleLogin, $location) {
    var ref = new Firebase('https://torid-fire-513.firebaseio.com/');
    $rootScope.auth = $firebaseSimpleLogin(ref);

    $scope.signIn = function () {
        $rootScope.auth.$login("twitter").then(function(user) {
            console.log("sherpa we are logged in!");
            $location.path("/assessment");
        }, function(error) {
            console.log(error);
        });
    }
});