'use strict';

/**
 * @ngdoc function
 * @name weatherWidget.controller:BaiduWeatherCtrl
 * @description
 * # BaiduWeatherCtrl
 * Controller of the baiduWeatherWidgetApp
 */
angular.module('baiduWeatherWidgetApp')

	.controller('BaiduWeatherCtrl', ['$scope', '$http', 'localStorageService', function($scope, $http, localStorageService) {
		var city;
		$scope.loading = true;
		$scope.updateWeather = function(){
			if(localStorageService.get('localStorageCity') == null){
				city = '贵阳';
			}else{
				$scope.localStorageDemo = localStorageService.get('localStorageCity');
				city = localStorageService.get('localStorageCity');
			}
			var	apiKey = "hBDoMmfaQvkxwifiKdsQij6s";
			var url = "http://api.map.baidu.com/telematics/v3/weather?location="+city+"&output=json&ak="+apiKey+"&callback=JSON_CALLBACK&error={error}";
			$http({
				url: url,
				method: 'JSONP'
			}).then(function(data) {
				$scope.weathers =  data;
			}, function(error) {
				console.warn('JSON Fail or '+ error)
			}).finally(function() {
				$scope.loading = false;
			});
			$('.js-weather-settings').addClass('hidden');
		};
		$scope.updateWeather();
	}]);
