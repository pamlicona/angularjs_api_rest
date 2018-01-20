'use strict';

angular.module('myApp.view-album', ['ngRoute'])
  .controller('viewAlbumController', viewAlbumController);

function viewAlbumController(scope, HttpService, location, rootScope) {
  scope.loading = false;

  HttpService.generateNativePetition('/song/getAll', 'POST', null, function (success, error) {
    scope.$apply(function () {
      if (success) {
        scope.songs = success.data;
      }
      scope.loading = false;
    });
  });

  scope.deleteSong = function (idAlbum) {
    scope.loading = true;
    HttpService.generateNativePetition('/song/remove', 'POST', null, function (success, error) {
      scope.$apply(function () {
        if (success) {
          scope.songs = success.data;
        }  
        scope.loading = false;
      });
    });
  };

}

viewAlbumController.$inject = ['$scope', 'HttpService', '$location', '$rootScope'];
