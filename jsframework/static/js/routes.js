(function(){
    'use strict';
    angular.module('routing', ['ui.router', 'controllers'])
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: '/static/templates/home.html',
                    controller: 'MainCtrl',
                    controllerAs: 'vm'
                })
                .state('add-todo', {
                    url: '/add',
                    templateUrl: '/static/templates/add_todo.html',
                    controller: 'MainCtrl',
                    controllerAs: 'vm'
                });
            $urlRouterProvider.otherwise('/');
        }]);
})();