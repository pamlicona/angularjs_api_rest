'use strict';

angular.module('myApp.new-song', ['ngRoute'])
  .controller('newSongController', newSongController);

function newSongController(scope, location, HttpService) {
  //TODO change for true when exist request
  scope.song = {};
  scope.error = false;
  scope.loading = false;
  scope.albumes = JSON.parse(localStorage.getItem("albumes"));

  scope.sendAlbum = function () {
    if (scope.song.hasOwnProperty('name') && scope.song.hasOwnProperty('albumId')) {
      HttpService.generateNativePetition('/songs/', 'POST', scope.song, function (success, error) {
        scope.loading = true;
        scope.$apply(function () {
          if (success === 204) {
            location.path('view-album/' + scope.song.albumId);
            scope.song = {};
          }
          scope.loading = false;
        });
      });
    } else {
      scope.error = true;
    }
    
  };

}

newSongController.$inject = ['$scope', '$location', 'HttpService'];
