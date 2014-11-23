var coverApp = angular.module("CoverApp", ['ngAnimate', 'CoverControllers']);

var coverControllers = angular.module('CoverControllers', []);

coverControllers.controller('CoverController', ['$scope', '$timeout',
    function ($scope, $timeout) {

        $scope.Availability = "mid-August 2014";

        $scope.Name = "Jeff Eldridge";
        $scope.Email = "jeff@rathmoreit.com";
        $scope.PhoneNumber = "+353 87 916 2652";

        var backgroundClasses = ['bg1', 'bg2', 'bg3', 'bg4'],
            bi = _.random(0, (backgroundClasses.length - 1)),
            bgt = 6000;

        var cycleBackground = function () {

            $('html').removeClass(backgroundClasses[bi]);
            bi++;
            bi = bi % backgroundClasses.length;
            $('html').addClass(backgroundClasses[bi]);

            $timeout(cycleBackground, bgt);

        };

        cycleBackground();


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
