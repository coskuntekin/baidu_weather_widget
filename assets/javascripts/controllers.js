"use strict";angular.module("baiduWeatherWidgetApp").controller("BaiduWeatherCtrl",["$scope","weatherService","locationService",function(e,t,n){var o;n.getLocation().then(function(e){0===e.status?o=e.content.address_detail.city:console.warn("Can't get location")},function(e){console.warn(e)}).then(function(){t.getWeather(o).then(function(t){var n=t.status;"success"===n?e.weathers=t.results:e.warningMessage=n},function(e){console.warn(e)})},function(e){console.warn(e)})}]);