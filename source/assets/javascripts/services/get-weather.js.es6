'use strict';

/**
 * @ngdoc directive
 * @name baiduWeatherWidgetApp.services.weatherService
 * @description
 * # weatherService
 */
angular.module('baiduWeatherWidgetApp')
  .factory('weatherService', ['$http', function ($http){
    return {
       getWeather: function (city) {
         const apiKey= 'hBDoMmfaQvkxwifiKdsQij6s';
         const url = "http://api.map.baidu.com/telematics/v3/weather?location="+city+"&output=json&ak="+apiKey;
         return $http({
           method: 'JSONP',
           url: url
         }).then(function successCallback(response) {
           return response.data;
          }, function errorCallback(response) {
             return response.data;
           });
       }
     }
  }]);
