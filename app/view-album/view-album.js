'use strict';

angular.module('myApp.view-album', ['ngRoute'])
  .controller('viewAlbumController', viewAlbumController);

function viewAlbumController(scope, HttpService, location, routeParams) {
  scope.loading = false;

  function getSongs() {
    HttpService.generateNativePetition('/songs/' + routeParams.id, 'GET', null, function (success, error) {
      scope.loading = true;
      scope.$apply(function () {
        if (success) {
          scope.songs = JSON.parse(success);
        }
        scope.loading = false;
      });
    });
  } 
  
  getSongs() 

  scope.deleteSong = function (idSong) {
    scope.loading = true;
    HttpService.generateNativePetition('/songs/' + idSong + '/', 'POST', null, function (success, error) {
      scope.$apply(function () {
        if (success === 204) {
          getSongs()
        }  
        scope.loading = false;
      });
    });
  };

}

viewAlbumController.$inject = ['$scope', 'HttpService', '$location', '$routeParams'];
