angular.module('frenemy').controller('index', function($scope, $rootScope, $firebaseAuth, $location) {
    var ref = new Firebase('https://torid-fire-513.firebaseio.com/');
    $rootScope.auth = $firebaseAuth(ref);

    $scope.signIn = function () {
        $rootScope.auth.$login("twitter").then(function(user) {
            console.log("sherpa we are logged in!");
            $location.path("/sherpa");
        }, function(error) {
            console.log(error);
        });
    }
});