var cvControllers = angular.module('cvControllers', []);

function makeDate (o) {
    if (typeof(o) !== 'object') {
        return '';
    }
    return new Date (o[0], o[1]-1, o[2]);
}

var cvNavigation = [
    {
        title : "Profile",
        url : "/profile",
        href : "#profile"
    },
    {
        title : "Employment",
        url : "/employment",
        href : "#employment"
    } //,
//    {
//        title : "Technology",
//        url : "/technology",
//        href : "#technology"
//    }
];

var portfolioNav = [
    {
        title : "Code",
        url : "/code",
        href : "#code"
    },
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
];

cvControllers.controller('NavController', ['$scope', '$location',
    function ($scope, $location) {

        $scope.IsActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

        $scope.Navigation = [
            {
                head : "CV",
                items : cvNavigation
            },
            {
                head : "Portfolio",
                items : portfolioNav
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

        $scope.ShortMenu = _.union(cvNavigation, portfolioNav);

    }
]);

cvControllers.controller('CodeController', ['$scope',
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

        $scope.ShowAll = function () {
            $scope.History = history;
        };

        var history = [
            {
                where : "Rathmore IT Solutions",
                positions : [
                    {
                        title: "Consultant",
                        type: "p",
                        desc : [
                            "Implementing Node.js and Javascript Secondary School Library System",
                            "Designed and implemented <a href='http://www.dnnsoftware.com/' target='_blank'>DotNetNuke</a> based website for <a href='http://www.eadestowngaa.ie' target='_blank'>Eadestown GAA</a>",
                            "Designed and developed ASP.NET and SQL Server based Primary School Library System",
                        ],
                        start : [2010, 11, 1],
                        end : ""
                    }
                ],
                start : [2010, 11, 1],
                end : "",
                business : ["Web Design", "Education Software"],
                skills : ["Javascript", "Node.js", "Angular.js", "C#", "ASP.NET"]
            },
            {
                where : "Microsoft European Product Development Centre",
                positions : [
                    {
                        title : "Software Design Engineer in the Office Product Group",
                        type : "p",
                        start : [2003, 12, 1],
                        end : [2010, 10, 22],
                        desc : [
                            "Inventor of <a href='http://patent.ipexl.com/EP/1669920-a1.html' target='_blank'>EPO Patent 1669920-A1 Information management systems with time zone information, including event scheduling processes</a>",
                            "Developed Excel VSTO add-in to bring lightweight localization toolset to the Office platform",
                            "Directed Engineering Excellence initiatives for Software Configuration Management",
                            "Implemented <a href='http://wixtoolset.org/' target='_blank'>Windows Installer XML</a> (WIX) templates for near zero effort deployment solutions",
                            "Created the <a href='http://www.microsoft.com/en-ie/download/details.aspx?id=5887' target='_blank'>Microsoft Outlook SMS Add-in</a> (text messaging) for free download on Office Online",
                            "Created the <a href='http://www.microsoft.com/en-ie/download/details.aspx?id=22169' target='_blank'>International Character Toolbar</a> for free download on Office Online",
                            "Developed C++ template library for rapid Office Add-in development",
                            "Designed and implemented automated system for issuing Product Keys to vendors for Office 2007/2010 betas",
                            "Produced process and templates for near zero effort Office Add-in localization",
                            "Authored and presented training sessions to European Product Development Centre (on behalf of Microsoft Training group) on internal Source Code Control System (Source Depot)",
                            "Developer on file transfer system (Rainbow) critical to delivery many of Microsoft’s major products; including Windows, Office and Visual Studio",
                            "Supported and migrated existing InstallShield deployment solutions"
                        ]

                    },
                    {
                        title: "Development Lead in Windows Engineering Group (Productivity Tools Team)",
                        type: "p",
                        start : [1999, 10, 1],
                        end : [2003, 11, 1],
                        desc : [
                            "Developed ASP.NET terminology management system",
                            "Co-developed secure file transfer server and client application",
                            "Lead development on vendor and contract management application",
                            "Lead development on ASP.NET front end for corp wide issue tracking system"
                        ]
                    }


                ],
                start : [1999, 9, 1],
                end : [2010, 10, 22],
                business : ["Software Localization", "Customer Engagement"],
                skills : ["C++", "C#", "SQL", "ASP.NET", "Javascript", "Perl"]
            },
            {
                where : "Natwest Magex UK",
                positions : [
                    {
                        title: "Lead Programmer",
                        type: "c"
                    }
                ],
                start : [1999, 3, 1],
                end : [1999, 9, 1],
                desc : [""],
                business : ["e-Commerce micro-transactions"],
                skills : ["C++", "MFC"]
            },
            {
                where : "Deutsche Bank",
                positions : [
                    {
                        title: "Programmer",
                        type: "c"
                    }
                ],
                start : [1998, 10, 1],
                end : [1999, 2, 28],
                desc : [""],
                business : ["Repurchase Agreements (Repos)"],
                skills : ["C++", "MFC"]
            },
            {
                where : "Lehman Brothers",
                positions : [
                    {
                        title: "Programmer",
                        type: "c"
                    }
                ],
                start : [1997, 7, 1],
                end : [1998, 9, 1],
                desc : [""],
                business : ["Convertible bonds, Option Agreements"],
                skills : ["C++", "MFC", "SQL", "Visual Basic 6", "ASP"]
            },
            {
                where : "Natwest Markets",
                positions : [
                    {
                        title: "Programmer",
                        type: "c"
                    }
                ],
                start : [1996, 8, 1],
                end : [1997, 6, 1],
                desc : [""],
                business : ["Commericial banking back-office trade processing"],
                skills : ["C++", "MFC", "SQL"]
            },
            {
                where : "Motability Finance Limited",
                positions : [
                    {
                        title: "Programmer",
                        type: "c"
                    }
                ],
                start : [1995, 1, 1],
                end : [1996, 7, 1],
                desc : [""],
                business : ["Application Security"],
                skills : ["C++", "MFC", "COM", "OLE", "SQL"]
            },
            {
                where : "Centrefile Limited",
                positions : [
                    {
                        title: "Programmer, Database Analyst",
                        type: "c"
                    }
                ],
                start : [1993, 5, 1],
                end : [1994, 12, 1],
                desc : [""],
                business : ["Retail Banking Application Security"],
                skills : ["C++", "MFC", "SQL"]
            },
            {
                where : "Microsoft UK",
                positions : [
                    {
                        title: "Consultant",
                        type: "c"
                    }
                ],
                start : [1993, 2, 1],
                end : [1993, 4, 1],
                desc : [""],
                business : ["Customer management solutions"],
                skills : ["Visual Basic 2", "Access", "SQL"]
            },
            {
                where : "Midland Bank",
                positions : [
                    {
                        title: "Programmer",
                        type: "c"
                    }
                ],
                start : [1992, 6, 1],
                end : [1992, 12, 1],
                desc : [""],
                business : ["Retail banking"],
                skills : ["OS/2", "C", "Embedded SQL"]
            },
            {
                where : "4-Sight Limited",
                positions : [
                    {
                        title: "Programmer",
                        type: "c"
                    }
                ],
                start : [1992, 2, 1],
                end : [1992, 5, 31],
                desc : ["Lopem ipsum..."],
                business : ["Windows Fax Software"],
                skills : ["C", "Windows DDK"]
            },
            {
                where : "IBM UK Laboratories Limited",
                positions : [
                    {
                        title: "Trainee Programmer",
                        type: "p"
                    }
                ],
                start : [1989, 9, 1],
                end : [1991, 9, 31],
                desc : [""],
                business : ["IBM OS/2"],
                skills : ["OS/2", "C", "C++"]
            }
        ];

        angular.forEach (history, function(v,k) {
            v.start = makeDate(v.start);
            v.end = makeDate(v.end);
            angular.forEach (v.positions, function(v2) {
                v2.start = makeDate(v2.start);
                v2.end = makeDate(v2.end);
            });
        });

        $scope.History = history.slice(0,$scope.ShowLast);

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
                        desc: "",
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
                        desc: "",
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
                        desc: "",
                        track: "Death of an AI"
                    },
                    {
                        title: "Cyborg Life Support System",
                        desc: "",
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

        $scope.YouTubeVideos = [
            {
                head: "3D Animations",
                desc: "Modelled and rendered in AutoDesk's 3DS Studio Max, edited in Adobe Premier Pro CC 6",
                tracks: [
                    {
                        title: "TARDIS arrives in the lab at UNIT",
                        url: "https://www.youtube.com/watch?v=kLVrDU5tb-k"
                    },
                    {
                        title: "Cyber-Minions",
                        url: "https://www.youtube.com/watch?v=on6uUuuFRP8"
                    }

                ]
            },
            {
                head: "Rathmore National School Fashion Show DVD",
                desc: "Filmed at Kilashee House Hotel, Naas on 30th October 2008, the footage was edited together using Abobe Premier Elements 7, and authored into a DVD using DVD Lab Pro 2",
                tracks: [
                    {
                        title: "DVD Teaser Trailer",
                        url: "https://www.youtube.com/watch?v=zgNIccPet4s"
                    },
                    {
                        title: "Full trailer",
                        url: "http://www.youtube.com/watch?v=pdTgocquLgI?autoplay=1"
                    }
                ]
            }

        ];

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

//        threedee = _.shuffle(threedee);
//        threedee = _.shuffle(threedee);
        $scope.ThreeDeeArtwork = threedee; //_.shuffle(threedee);

    }
]);

cvControllers.controller('GamesController', ['$scope',
    function ($scope) {

    }
]);
