'use strict';

angular.module('myApp.albumes', ['ngRoute'])
  .controller('albumesController', albumesController);

function albumesController(scope, location, HttpService) {
  //TODO change for true when exist request
  scope.loading = false;

  function getAlbumes() {
    HttpService.generateNativePetition('/albumes', 'GET', null, function (success, error) {
      scope.loading = true;
      scope.$apply(function () {
        if (success) {
          scope.albumes = JSON.parse(success);
          localStorage.setItem("albumes", success);
        }  
        scope.loading = false;
      });
    });
  }

  getAlbumes();

  scope.viewReservation = function (albumId) {
    location.path("/view-album/" + albumId);
  };

  scope.deletAlbum = function (idAlbum) {
    scope.loading = true;
    HttpService.generateNativePetition('/albumes/' + idAlbum + '/', 'POST', null, function (success, error) {
      scope.$apply(function () {
        if (success === 204) {
          getAlbumes();
        }
        scope.loading = false;
      });
    });
  };
}

albumesController.$inject = ['$scope', '$location', 'HttpService'];
