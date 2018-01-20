'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.albumes',
  'myApp.view-album',
  'myApp.new-album',
  'myApp.new-song'
]).config(config).controller('mainController', mainController);

function mainController(scope, location) {

}

mainController.$inject = ['$scope', '$location'];

function config(routeProvider) {
	routeProvider
    .when('/albumes', {
      templateUrl: '/albumes/albumes',
      controller: 'albumesController',
    })
    .when('/view-album/:id', {
      templateUrl: '/view-album/view-album',
      controller: 'viewAlbumController',
    })
    .when('/new-album', {
      templateUrl: '/new-album/new-album',
      controller: 'newAlbumController',
    })
    .when('/new-song', {
      templateUrl: '/new-song/new-song',
      controller: 'newSongController',
    })
    .otherwise({redirectTo: '/albumes'});
};

config.$inject = ['$routeProvider'];