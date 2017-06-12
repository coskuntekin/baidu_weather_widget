'use strict';

/**
 * @ngdoc overview
 * @name baiduWeatherWidget
 * @description
 * # baiduWeatherWidget
 *
 * Main module of the application.
 */

angular.module('baiduWeatherWidgetApp', [])
  .config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self',
      // Allow loading from our assets domain.  Notice the difference between * and **.
      'http://api.map.baidu.com/**'
    ]);
  })
  .controller('MainCtrl', function () {});
