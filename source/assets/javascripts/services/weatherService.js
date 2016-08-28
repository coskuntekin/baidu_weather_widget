'use strict';

/**
 * @ngdoc directive
 * @name baiduWeatherWidgetApp.services.weatherService
 * @description
 * # weatherService
 */
angular.module('baiduWeatherWidgetApp')
  .factory('weatherService', ['$http', '$q', function ($http, $q){
    function getWeather (city) {
      var deferred = $q.defer();
      var apiKey= "hBDoMmfaQvkxwifiKdsQij6s";
      var url = "http://api.map.baidu.com/telematics/v3/weather?location="+city+"&output=json&ak="+apiKey+"&callback=JSON_CALLBACK&error=";
      $http({
        url: url,
        method: 'JSONP'
      }).success(function(data) {
        deferred.resolve(data);
      }).error(function(error){
        console.warn(error);
        deferred.reject(error);
      });
      return deferred.promise;
    }
    return {
      getWeather: getWeather
    };
  }]);
