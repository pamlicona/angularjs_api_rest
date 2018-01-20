'use strict';

angular.module('myApp.new-album', ['ngRoute'])
  .controller('newAlbumController', newAlbumController);

function newAlbumController(scope, location, HttpService) {
  //TODO change for true when exist request
  scope.album = {};

  scope.sendAlbum = function () {
    HttpService.generateNativePetition('/album/add', 'POST', scope.album, function (success, error) {
      scope.loading = true;
      scope.$apply(function () {
        if (success) {
            // Redirect albums
        }
        scope.loading = false;
      });
    });
  };

}

newAlbumController.$inject = ['$scope', '$location', 'HttpService'];
