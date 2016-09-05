'use strict';

/**
 * @ngdoc function
 * @name weatherWidget.controller:BaiduWeatherCtrl
 * @description
 * # BaiduWeatherCtrl
 * Controller of the baiduWeatherWidgetApp
 */
angular.module('baiduWeatherWidgetApp')
	.controller('BaiduWeatherCtrl', ['$scope', '$http', '$log', 'localStorageService', 'weatherService', function($scope, $http, $log, localStorageService, weatherService) {

    var city;
		$scope.isWeatherDataLoading = true;


		$scope.updateWeather = function(){
			if(localStorageService.get('localStorageCity') == null){
				city = '贵阳';
			}else{
				$scope.localStorageDemo = localStorageService.get('localStorageCity');
				city = localStorageService.get('localStorageCity');
			}
      weatherService.getWeather(city)
        .then(function successCallback(response){
          var statusCheck = response.status;
          if(statusCheck == "success"){
						$scope.isWeatherDataLoading = false;
            $scope.weathers =  response.results;
          }
        },function fallback(error){
          $log.warn('JSON Fail with '+ error)
        }).finally(function(){
        });
      $('.js-weather-settings').addClass('hidden');
		};

		$scope.updateWeather();

		$scope.hideForm = function() {
    	$('.js-weather-settings').addClass('hidden');
		};

	}]);
