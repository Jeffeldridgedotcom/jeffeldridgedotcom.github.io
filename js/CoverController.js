var coverApp = angular.module("CoverApp", ['ngAnimate', 'CoverControllers']);

var coverControllers = angular.module('CoverControllers', []);

coverControllers.controller('CoverController', ['$scope', '$timeout',
    function ($scope, $timeout) {

        var
            landscapes = [
                "Close Up.jpg",
                "Final 1.jpg",
                "Final 3.jpg",
                "Group Blurred.jpg"
                // "PopArt1.jpg"
            ],

            portraits = [
                "Portrait-1-Blurred.jpg",
                "PopArt1.jpg"
            ],

            nb = 0,
            delay = 10000,
            cycleBackground = function () {
                nb++;
                $scope.Landscape = landscapes[nb % landscapes.length];
                $scope.Portrait = portraits[nb % portraits.length];
                $timeout (cycleBackground, delay);
            }

        $scope.bg = function () {
            return nb % 2 === 0;
        }

        landscapes = _.shuffle(landscapes);
        landscapes = _.shuffle(landscapes);
        landscapes = _.shuffle(landscapes);

        $scope.Landscape = landscapes[0];
        $scope.Portrait = portraits[0];

        $timeout (cycleBackground, delay);

        $scope.Availability = "mid-August 2014";

        $scope.Name = "Jeff Eldridge";
        $scope.Email = "jeff@rathmoreit.com";
        $scope.PhoneNumber = "+353 87 916 2652";

    }
]);

coverApp.directive ("detectOrientation", function () {
    return {
        restrict : 'A',
        link : function (scope, element, attributes) {
            scope.IsLandscape = $(window).height() < $(window).width();
        }

    }
});
