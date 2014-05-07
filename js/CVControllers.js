var cvControllers = angular.module('cvControllers', []);

function makeDate (o) {
    if (typeof(o) !== 'object') {
        return '';
    }
    return new Date (o[0], o[1]-1, o[2]);
}

cvControllers.controller('NavController', ['$scope', '$location',
    function ($scope, $location) {

        $scope.IsActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

        $scope.Navigation = [
            {
                head : "CV",
                items : [
                    {
                        title : "Profile",
                        url : "/profile",
                        href : "#profile"
                    },
                    {
                        title : "Employment",
                        url : "/employment",
                        href : "#employment"
                    },
                    {
                        title : "Technology",
                        url : "/technology",
                        href : "#technology"
                    }
                ]
            },
            {
                head : "Portfolio",
                items : [
                    {
                        title : "Audio",
                        url : "/audio",
                        href : "#audio"
                    },
                    {
                        title : "Video",
                        url : "/video",
                        href : "#video"
                    },
                    {
                        title : "Art",
                        url : "/art",
                        href : "#art"
                    },
                    {
                        title : "Games",
                        url : "/games",
                        href : "#games"
                    }
                ]
            }
        ];

    }
]);

cvControllers.controller('ProfileController', ['$scope',
    function ($scope) {

        var today = new Date();
        var birthDate = new Date(1970,11-1,2);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        $scope.Age = age;
        $scope.Experience = new Date().getUTCFullYear() - 1989;

        $scope.Name = "Jeff Eldridge";
        $scope.Email = "jeff@rathmoreit.com";
        $scope.PhoneNumber = "+353 87 916 2652";


    }
]);

cvControllers.controller('TechnologyController', ['$scope',
    function ($scope) {

    }
]);


cvControllers.controller('ContactController', ['$scope',
    function ($scope) {

    }
]);

cvControllers.controller('EmploymentController', ['$scope', '$http',
    function ($scope, $http) {

        $scope.History = [];

        $scope.ShowLast = 2;

        $scope.SeeingAll = function () {
            $scope.History.length === $scope.ShowLast;
        };

        $scope.onSeeAll = function () {
            $scope.ShowLast = $scope.History.length;
        };

        $scope.History = [
            {
                where : "Rathmore IT Solutions",
                type : "p",
                position : "Consultant",
                start : [2010, 11, 1],
                end : "",
                desc : ["Lorem ipsum..."],
                business : ["Education"],
                skills : ["Javascript", "Node.js", "Angular.js", "C#", "ASP.NET"]
            },
            {
                where : "Microsoft European Product Development Centre",
                type : "p",
                position : "Software Design Engineer",
                start : [1999, 9, 1],
                end : [2010, 10, 22],
                desc : ["Lorem ipsum..."],
                business : ["Software Localization"],
                skills : ["C++", "C#", "SQL", "ASP.NET", "Javascript", "Perl"]
            },
            {
                where : "Natwest Magex UK",
                type : "c",
                position : "Lead Programmer",
                start : [1999, 3, 1],
                end : [1999, 9, 1],
                desc : ["Lorem ipsum..."],
                business : ["e-Commerce micro-transactions"],
                skills : ["C++", "MFC"]
            },
            {
                where : "Deutsche Bank",
                type : "c",
                position : "Programmer",
                start : [1998, 10, 1],
                end : [1999, 2, 28],
                desc : ["Lorem ipsum..."],
                business : ["Repurchase Agreements (Repos)"],
                skills : ["C++", "MFC"]
            },
            {
                where : "Lehman Brothers",
                type : "c",
                position : "Programmer",
                start : [1997, 7, 1],
                end : [1998, 9, 1],
                desc : ["Lorem ipsum..."],
                business : ["Convertible bonds, Option Agreements"],
                skills : ["C++", "MFC", "SQL", "Visual Basic 6", "ASP"]
            },
            {
                where : "Natwest Markets",
                type : "c",
                position : "Programmer",
                start : [1996, 8, 1],
                end : [1997, 6, 1],
                desc : ["Lorem ipsum..."],
                business : ["Commericial banking back-office trade processing"],
                skills : ["C++", "MFC", "SQL"]
            },
            {
                where : "Motability Finance Limited",
                type : "c",
                position : "Programmer",
                start : [1995, 1, 1],
                end : [1996, 7, 1],
                desc : ["Lorem ipsum..."],
                business : ["Application Security"],
                skills : ["C++", "MFC", "COM", "OLE", "SQL"]
            },
            {
                where : "Centrefile Limited",
                type : "c",
                position : "Programmer, Database Analyst",
                start : [1993, 5, 1],
                end : [1994, 12, 1],
                desc : ["Lorem ipsum..."],
                business : ["Retail Banking Application Security"],
                skills : ["C++", "MFC", "SQL"]
            },
            {
                where : "Microsoft UK",
                type : "c",
                position : "Consultant",
                start : [1993, 2, 1],
                end : [1993, 4, 1],
                desc : ["Lorem ipsum..."],
                business : ["Customer management solutions"],
                skills : ["Visual Basic 2", "Access", "SQL"]
            },
            {
                where : "Midland Bank",
                type : "c",
                position : "Programmer",
                start : [1992, 6, 1],
                end : [1992, 12, 1],
                desc : ["Lorem ipsum..."],
                business : ["Retail banking"],
                skills : ["OS/2", "C", "Embedded SQL"]
            },
            {
                where : "4-Sight Limited",
                type : "c",
                position : "Programmer",
                start : [1992, 2, 1],
                end : [1992, 5, 31],
                desc : ["Lopem ipsum..."],
                business : ["Windows Fax Software"],
                skills : ["C", "Windows DDK"]
            },
            {
                where : "IBM UK Laboratories Limited",
                type : "p",
                position : "Systems Programmer",
                start : [1989, 9, 1],
                end : [1991, 9, 31],
                desc : ["Lorem ipsum..."],
                business : ["IBM OS/2"],
                skills : ["OS/2", "C", "C++"]
            }
        ];

        angular.forEach ($scope.History, function(v,k) {
            v.start = makeDate(v.start);
            v.end = makeDate(v.end);
        });

//        $http.jsonp ('data/employment.json?callback=JSON_CALLBACK', {cache:false}).success (function (data){
//           $scope.History = data.employment;
//           angular.forEach ($scope.History, function(v,k) {
//               v.start = makeDate(v.start);
//               v.end = makeDate(v.end);
//           });
//        }).error(function(data, status, headers, config) {
//            console.log ("$$$");
//        });


    }]);

cvControllers.controller('AudioController', ['$scope', '$sce',
    function ($scope, $sce) {

        $scope.onPlay = function(i) {
            $scope.Track = $scope.Soundcloud[i].src;
        }

        $scope.Audios = [
            {
                head: "Soundscapes",
                items: [
                    {
                        title: "1960's Alien Invasion",
                        desc: "Inspired by the BBC's Radiophonic Workshop imagine yourself in swinging '60s London, when the aliens invade!",
                        track: "AlienInvasion"
                    },
                    {
                        title: "Alien Control Room",
                        desc: "Lorem ipsum...",
                        track: "Atmos"
                    }

                ]
            },
            {
                head: "Dialogues",
                items: [
                    {
                        title: "You Belong To Us...",
                        desc: "Aliens intent on converting humanity to be like them deliver a chilling warning",
                        track: "You Belong To Us"
                    },
                    {
                        title: "Coded Bomb Warning",
                        desc: "The phone rings in a busy newsroom. On the end of the line, terrorist or hoax?",
                        track: "Coded Bomb Warning"
                    },
                    {
                        title: "Damage Report",
                        desc: "Lorem ipsum...",
                        track: "Zen"
                    }

                ]
            },
            {
                head: "Foleys",
                items: [
                    {
                        title: "Switch On",
                        desc: "Throw a switch and power on a big electrical system",
                        track: "Switch-On"
                    },
                    {
                        title: "Switch Off",
                        desc: "Throw a switch and power down a big electrical system",
                        track: "Switch-Off"
                    },
                    {
                        title: "Death of an Artificial Intelligence",
                        desc: "Lorem ipsum...",
                        track: "Death of an AI"
                    },
                    {
                        title: "Cyborg Life Support System",
                        desc: "Lorem ipsum...",
                        track: "Cyborg Life Support System"
                    }

                ]
            }
        ];

        angular.forEach($scope.Audios, function (v) {
            angular.forEach (v.items, function (i) {
                var tr = i.track, url = 'assets/audio/';
                i.oggtrack = url + tr + ".ogg";
                i.mp3track = url + tr + ".mp3";
            });
        });


    }
]);

cvControllers.controller('VideoController', ['$scope', '$sce',
    function ($scope, $sce) {

        $scope.CurrentTrack = "assets/video/Static-512x288.mp4";


        $scope.Videos = [
            {
                title: "Cyber-minons",
                desc: "A mash-up of Gru's Minions (Despicable Me) and Cybermen (Doctor Who)",
                track: "assets/video/Cyberminion.mp4"
                // track: "assets/video/Static-512x288.mp4"

            }
        ];

        $scope.onPlay = function(i) {
            $scope.Track = $scope.YouTubeVideos[i].src;
        }

        $scope.YouTubeVideos = [
            {
                // <iframe width="420" height="315" src="//www.youtube.com/embed/pdTgocquLgI" frameborder="0" allowfullscreen></iframe>
                head : "Rathmore National School Fashion Show DVD Trailer",
                desc : "Lorem ipsum...",
                track: "pdTgocquLgI"
            },
            {
                // <iframe width="420" height="315" src="//www.youtube.com/embed/pdTgocquLgI" frameborder="0" allowfullscreen></iframe>
                head : "Rathmore National School Fashion Show DVD Teaser",
                desc : "Lorem ipsum...",
                track: "zgNIccPet4s"
            }

        ];

        angular.forEach($scope.Videos, function(v) {
            var src = "//www.youtube.com/embed/" + v.track;
            v.src = $sce.trustAsResourceUrl(src);
        });

        $scope.Track = $scope.Videos[0].src;

    }
]);

cvControllers.controller('GameController', ['$scope',
    function ($scope) {

    }
]);

cvControllers.controller('ArtController', ['$scope',
    function ($scope) {

        var threedee = [
            {
                src : 'images/portfolio/unitlab/Final 1.jpg',
                png : 'images/portfolio/unitlab/Final 1.png',
                poster : 'images/portfolio/unitlab/poster/Final 1.jpg',
                title : 'UNIT Lab 1'
            },
            {
                src : 'images/portfolio/unitlab/Final 2.jpg',
                png : 'images/portfolio/unitlab/Final 2.png',
                poster : 'images/portfolio/unitlab/poster/Final 2.jpg',
                title : 'UNIT Lab 2'
            },
            {
                src : 'images/portfolio/unitlab/Final 3.jpg',
                png : 'images/portfolio/unitlab/Final 3.png',
                poster : 'images/portfolio/unitlab/poster/Final 3.jpg',
                title : 'UNIT Lab 3'
            },
            {
                src : 'images/portfolio/unitlab/Final 4.jpg',
                png : 'images/portfolio/unitlab/Final 4.png',
                poster : 'images/portfolio/unitlab/poster/Final 4.jpg',
                title : "UNIT Lab 4"
            },
            {
                src : 'images/portfolio/cyberminion/Close Up BW.jpg',
                poster : 'images/portfolio/cyberminion/poster/Close Up BW.jpg',
                title : "1960's B&W Close-Up"
            },
            {
                src : 'images/portfolio/cyberminion/Close Up.jpg',
                poster : 'images/portfolio/cyberminion/poster/Close Up.jpg',
                title : "Up close and personal"
            },
//            {
//                src : 'images/portfolio/cyberminion/Group 1.jpg',
//                poster : 'images/portfolio/cyberminion/poster/Group 1.jpg',
//                title : "Leader and troopers"
//            },
            {
                src : 'images/portfolio/cyberminion/Group Blurred.jpg',
                poster : 'images/portfolio/cyberminion/poster/Group Blurred.jpg',
                title : "Leader and troopers"
            },
            {
                src : 'images/portfolio/cyberminion/Leader.jpg',
                poster : 'images/portfolio/cyberminion/poster/Leader.jpg',
                title : "Cyber-minion Leader"
            },
            {
                src : 'images/portfolio/cyberminion/Trooper.jpg',
                poster : 'images/portfolio/cyberminion/poster/Trooper.jpg',
                title : "Cyber-minion Trooper"
            }
        ];

        threedee = _.shuffle(threedee);
        threedee = _.shuffle(threedee);
        $scope.ThreeDeeArtwork = _.shuffle(threedee);

    }
]);
