'use strict';

angular.module('myApp.albumes', ['ngRoute'])
  .controller('albumesController', albumesController);

function albumesController(scope, location, HttpService) {
  //TODO change for true when exist request
  scope.loading = false;

  HttpService.generateNativePetition('/albumes/getAll', 'POST', null, function (success, error) {
    scope.$apply(function () {
      if (success) {
        scope.albumes = success.data;
      }  
      scope.loading = false;
    });
  });

  scope.viewReservation = function (reservation) {
    location.path("/view-album/" + album.id);
  };

  scope.deletAlbum = function (idAlbum) {
    scope.loading = true;
    HttpService.generateNativePetition('/albumes/remove', 'POST', null, function (success, error) {
      scope.$apply(function () {
        if (success) {
          scope.albumes = success.data;
        }  
        scope.loading = false;
      });
    });
  };
}

albumesController.$inject = ['$scope', '$location', 'HttpService'];
