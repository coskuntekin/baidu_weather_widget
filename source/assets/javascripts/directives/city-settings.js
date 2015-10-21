'use strict';

/**
 * @ngdoc directive
 * @name baiduWeatherWidgetApp.directive:cityInput
 * @description
 * # citySettings
 */
angular.module('baiduWeatherWidgetApp')
    .directive('citySettings', function () {
        return {
            restrict: 'A',
            link: function postLink(scope, element) {
                element.on('click', function() {
                    $('.js-weather-settings').removeClass('hidden');
                });
            }
        };
    });
