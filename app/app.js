 /* App Module */

 var YApp = angular.module('YApp', [
     'ngRoute',
     'ngSanitize',
     'ngCookies'
 ]);


 skApp.config(['$routeProvider','$compileProvider',
     function($routeProvider,$compileProvider) {
         $routeProvider.
         when('/ylist', {
             templateUrl: 'ylist/ylist.html',
             controller: 'ylistCtrl'
         }).
         when('/y/:yId', {
             templateUrl: 'y/y.html',
             controller: 'yCtrl'
         }).
         otherwise({
             redirectTo: '/ylist'
         });
	 $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|dianping):/);
     }
 ]);

 skApp.run(function($rootScope, $http, $location, $cookies) {

 });