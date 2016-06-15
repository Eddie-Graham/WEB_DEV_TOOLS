var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl : 'html/home.html',
            controller  : 'HomeController'
        })

        .when('/about', {
            templateUrl : 'html/about.html',
            controller  : 'AboutController'
        })

        .otherwise({redirectTo: '/'});
});

app.controller('HomeController', function($scope) {
    $scope.message = 'Hello from HomeController';
});

app.controller('AboutController', function($scope) {
    $scope.message = 'Hello from AboutController';
});
