var cvApp = angular.module("CVApp", ['ngAnimate', 'ngRoute', 'ngSanitize', 'cvControllers']);

cvApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/employment', {
                templateUrl: 'partials/employment.html',
                controller: 'EmploymentController'
            }).
            when('/portfolio', {
                templateUrl: 'partials/portfolio.html',
                controller: 'PortfolioController'
            }).
            when('/profile', {
                templateUrl: 'partials/profile.html',
                controller: 'ProfileController'
            }).
            when('/technology', {
                templateUrl: 'partials/technology.html',
                controller: 'TechnologyController'
            }).
            when('/audio', {
                templateUrl: 'partials/audio.html',
                controller: 'AudioController'
            }).
            when('/video', {
                templateUrl: 'partials/video.html',
                controller: 'VideoController'
            }).
            when('/games', {
                templateUrl: 'partials/games.html',
                controller: 'GamesController'
            }).
            when('/art', {
                templateUrl: 'partials/art.html',
                controller: 'ArtController'
            }).
            otherwise({
                redirectTo: '/profile'
            });
    }]);

cvApp.directive ("magnificImages", function () {
    return {
        restrict : 'A',
        link : function (scope, element, attributes) {

            $(element).magnificPopup(
                {
                    delegate: 'a',
                    type: 'image',
                    closeOnContentClick: true,
                    closeBtnInside: false,
                    mainClass: 'mfp-with-zoom mfp-img-mobile',
                    image: {
                        verticalFit: true,
                        titleSrc: function (item) {
                            return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">image source</a>';
                        }
                    },
                    gallery: {
                        enabled: true
                    },
                    zoom: {
                        enabled: true,
                        duration: 300, // don't forget to change the duration also in CSS
                        opener: function (element) {
                            return element.find('img');
                        }
                    }

                });


        }

    }
});

cvApp.directive ("magnificVideos", function () {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {
            $(element).magnificPopup({
                delegate : 'a',
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,

                fixedContentPos: false
            });

        }
    }
});

