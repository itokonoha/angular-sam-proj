(function() {
    'use strict';

    angular
        .module('javagapApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('app', {
            //abstract: true,
            data: {
                
            },
            views: {
                '': {
                    templateUrl: 'app/layouts/home.html'
                },

                /*'navbar@': {
                    templateUrl: 'app/layouts/navbar/navbar.html',
                    controller: 'NavbarController',
                    controllerAs: 'vm'
                },
                */
                'header@app': {
                    templateUrl: 'app/layouts/header/header.html',
                    controller: 'NavbarController',
                    controllerAs: 'vm'
                },

                'banner@app': {
                    templateUrl: 'app/layouts/banner/banner.html',
                    controller: 'BannerController',
                    controllerAs: 'vm'
                },
                /*
                'lecture@app': {
                    templateUrl: 'app/layouts/lecture/lecture.html',
                    controller: 'LectureController',
                    controllerAs: 'vm'
                },
                */
                'services@app': {
                    templateUrl: 'app/layouts/services/services.html',
                    controller: 'ServicesController',
                    controllerAs: 'vm'
                },
                'testimonials@app': {
                    templateUrl: 'app/layouts/testimonials/testimonials.html',
                    controller: 'TestimonialsController',
                    controllerAs: 'vm'
                },
                'aboutUs@app': {
                    templateUrl: 'app/layouts/aboutUs/aboutUs.html'
                },
                'wait@app': {
                    templateUrl: 'app/layouts/wait/wait.html'
                },
                'contact@app': {
                    templateUrl: 'app/layouts/contact/contact.html',
                    controller: 'ContactController',
                    controllerAs: 'vm'
                },
                'footer@app': {
                    templateUrl: 'app/layouts/footer/footer.html',
                    controller: 'NavbarController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                authorize: ['Auth',
                    function (Auth) {
                        return Auth.authorize();
                    }
                ],
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('global');
                }]
            }
        });
    }
})();
