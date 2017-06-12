
/**
 * @ngdoc directive
 * @name baiduWeatherWidgetApp.services.locationService
 * @description
 * # locationService
 */
angular.module('baiduWeatherWidgetApp')
  .factory('locationService', ['$http', function ($http){
    return {
       getLocation: function () {
        var apiKey= 'hBDoMmfaQvkxwifiKdsQij6s';
        var url = "http://api.map.baidu.com/location/ip?ak="+apiKey;
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
