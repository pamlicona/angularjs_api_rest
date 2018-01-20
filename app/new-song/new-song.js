'use strict';

angular.module('myApp.new-song', ['ngRoute'])
  .controller('newSongController', newSongController);

function newSongController(scope, location, HttpService) {
  //TODO change for true when exist request
  scope.song = {};

  scope.sendAlbum = function () {
    HttpService.generateNativePetition('/song/add', 'POST', scope.song, function (success, error) {
      scope.loading = true;
      scope.$apply(function () {
        if (success) {
            // Redirect songs
        }
        scope.loading = false;
      });
    });
  };

}

newSongController.$inject = ['$scope', '$location', 'HttpService'];
