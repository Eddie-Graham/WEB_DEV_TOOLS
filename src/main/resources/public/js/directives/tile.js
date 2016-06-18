app.directive("tile", function() {
    return {
        restrict: "E",
        templateUrl: "html/tile.html",
        scope: {
            buttonText: "@",
            url: "@"
        }
    };
});