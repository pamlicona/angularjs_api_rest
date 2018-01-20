'use strict';

var app = angular.module('myApp');

app.factory('HttpService', HttpService);

function HttpService(http, rootScope, location) {
  var service = {},
    baseApi = "http://sandbox.neopraxis.getmore.mx:1337";

  service.generateNativePetition = generateNativePetition;

  return service;

  function _generateNativePetition(url, method, data, cb) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState === XMLHttpRequest.DONE) {
        if (xmlhttp.status === 200) {
          cb(JSON.parse(xmlhttp.responseText), null);
        }
        else if (xmlhttp.status === 400) {
          cb(null, xmlhttp.status);
        }
        else {
          cb(null, xmlhttp.status);
        }
      }
    };

    xmlhttp.open(method, baseApi.concat(url), true);
    xmlhttp.send(JSON.stringify(data));
  }

  function generateNativePetition(url, method, data, cb) {
    _generateNativePetition(url, method, data, cb);
  }

}

HttpService.$inject = ['$http', '$rootScope', '$location'];