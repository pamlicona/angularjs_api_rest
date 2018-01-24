'use strict';

angular.module('myApp.new-album', ['ngRoute'])
  .controller('newAlbumController', newAlbumController);

function newAlbumController(scope, location, HttpService) {
  //TODO change for true when exist request
  scope.album = {};
  scope.error = false;

  scope.sendAlbum = function () {
    if (scope.album.hasOwnProperty('name')) {
      HttpService.generateNativePetition('/albumes/', 'POST', scope.album, function (success, error) {
        scope.loading = true;
        scope.$apply(function () {
          if (success === 204 ) {
            scope.album = {};
            location.path('/#/albumes');
          }
          scope.loading = false;
        });
      });
    } else {
      scope.error = true;
    }
  };    

}

newAlbumController.$inject = ['$scope', '$location', 'HttpService'];
