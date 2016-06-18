var app = angular.module('wdt', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl : 'html/home.html'
        })

        .when('/directorytree', {
            templateUrl : 'html/directoryTree.html',
            controller  : 'DirectoryTreeController'
        })

        .when('/about', {
            templateUrl : 'html/about.html',
            controller  : 'AboutController'
        })

        .otherwise({redirectTo: '/'});
});
