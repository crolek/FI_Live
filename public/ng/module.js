angular.module('frenemy', ['ngRoute', 'firebase']);

angular.module('frenemy').config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when("/results", {
            templateUrl: "partials/results.html",
            controller: "results"
        })
        .when('/assessment', {
            templateUrl: 'partials/assessment.html',
            controller: 'assessment'
        })
        .when('/', {
            templateUrl: 'partials/index.html',
            controller: 'index'
        })
        .otherwise({
            redirectTo: '/'
        });

    // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(true);
});