'use strict';

angular.module('app.services').factory('LocationService', ['$rootScope', '$localStorage', function($rootScope, $localStorage) {

    var service = {};
    
    var map = null;
    var currentLocationMarker = null;
    var infoWindow = new google.maps.InfoWindow;
    
    service.getCurrentLocation = function(onSuccess, onFailure, options) {
        if(!geoPlugin) {
            console.log('LocationFactory.getCurrentLocation: navigator.geolocation not available!'); 
            return;
        }
        geoPlugin.getCurrentPosition(function() {
            var objSucc = this, args = arguments;
            if(onSuccess) {
                $rootScope.$apply(function() {
                   onSuccess.apply(objSucc, args);
                });
            }
        },function() {
            var objFail = this, args = arguments;
            if(onFailure) {
                $rootScope.$apply(function() {
                    onFailure.apply(objFail, args);
                });
            }
        }, options);
    };
    
    return service;
}]);