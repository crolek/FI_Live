angular.module('frenemy').controller('results', function($scope, $routeParams) {
    $scope.side = $routeParams.side;

    $scope.tweet = function() {
        window.location.href = 'http://twitter.com/home?status=' + encodeURI("I'm a "+$scope.side+" superhero! Find out if we're friends or enemies at http://frenemy.laet.us");
    }
});