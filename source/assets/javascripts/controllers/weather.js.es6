'use strict';

/**
 * @ngdoc function
 * @name weatherWidget.controller:BaiduWeatherCtrl
 * @description
 * # BaiduWeatherCtrl
 * Controller of the baiduWeatherWidgetApp
 */
angular.module('baiduWeatherWidgetApp')
  .controller('BaiduWeatherCtrl', [
    '$scope',
    'weatherService',
    'locationService',
    function($scope, weatherService, locationService) {

    let userLocation;
    $scope.errorMessage = '';
    locationService.getLocation().then(function successCallback(response){
      if(response.status === 0){
        userLocation = response.content.address_detail.city
      }else{
        $scope.errorMessage = response.message;
      }
    },function errorCallback(error){
      console.warn(error);
    })
    .then(function successCallback(){
       weatherService.getWeather(userLocation).then(function successCallback(response){
          const statusCheck = response.status;
          if(statusCheck === 'success'){
					  $scope.weathers = response.results;
          }else{
            $scope.warningMessage = statusCheck;
          }
        },function errorCallback(error){
          console.warn(error)
        });
    },function errorCallback(error){
      console.warn(error);
    });

	}]);
