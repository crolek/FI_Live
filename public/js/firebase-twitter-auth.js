var app = angular.module('app', ['firebase']);

app.controller('AuthCtrl', [
	'$scope', '$rootScope', '$firebaseAuth', function($scope, $rootScope, $firebaseAuth) {
		var ref = new Firebase('https://torid-fire-513.firebaseio.com/');
		$rootScope.auth = $firebaseAuth(ref);
		
		$scope.signIn = function () {
			$rootScope.auth.$login("twitter").then(function(user) {
				console.log("sherpa we failed");
			}, function(error) {
				console.log(error);
			});
		}
	}
]);