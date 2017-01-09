(function() {
     function config($stateProvider, $locationProvider) { 
         $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });
         
         $stateProvider
         .state('home', {
             url: '/',
             controller: 'HomeCtrl as home',
             templateUrl: '/templates/home.html'
         })
         
         .state('messageContainer', {
             url: '/messages',
             controller: 'MessageCtrl as msg',
             templateUrl: '/templates/messageContainer.html'
         });
         
     }
    
     angular
         .module('blocChat', ['ui.router', 'ui.bootstrap', 'firebase', 'ngCookies'])
         .config(config);
 })();