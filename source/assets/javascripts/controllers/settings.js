'use strict';

/**
 * @ngdoc function
 * @name weatherWidget.controller:WeatherSettingsCtrl
 * @description
 * # WeatherSettingsCtrl
 * Controller of the baiduWeatherWidgetApp
 */
angular.module('baiduWeatherWidgetApp')
    .controller('WeatherSettingsCtrl', function($scope, localStorageService) {
        $scope.localStorageCity = localStorageService.get('localStorageCity');
        $scope.$watch('localStorageCity', function(value){
            localStorageService.set('localStorageCity',value);
            $scope.localStorageCityValue = localStorageService.get('localStorageCity');
            localStorageService.set('localStorageCity',value);
        });
    });
