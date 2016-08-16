'use strict';

angular.module('app.services').factory('UserService', ['$rootScope', '$window', '$interval', '$localStorage', function($rootScope, $window, $interval, $localStorage) {
    
    var service = {};
    var localUser = $localStorage.user;
    var authDataLocal = $localStorage.authData;
    var ref = new Firebase(FIREBASE_SERVER_URL);
    
    service.getUser = function() {
        var user = null;
        if ($localStorage.user) {
            user = $localStorage.user;
        }
        return user;
    };

    service.setAuthDataLocal = function(authData) {
        $localStorage.authData = authData;
        authDataLocal = authData;
    };
    
    service.getAuthDataLocal = function() {
        if ($localStorage.authDataLocal) {
            authDataLocal = $localStorage.authDataLocal;
        }
        return authDataLocal;
    };
    
    service.setUser = function(user) {
        $localStorage.user = user;
    };
    
    service.saveUser = function(user) {
        user.updateTime = new Date().getTime();
        user.checked = false;
        
        ref.child('user/'+user.uid).set(user);
        $localStorage.user = user;
    };
    
    service.getUserByUid = function(uidType, uid) {        
        return ref.child('user').orderByChild(uidType).equalTo(uid).once('value').then(function(snapshot) {
            
            var user = snapshot.val();
                        
            if (user) {
                user = user[Object.keys(user)[0]];
            }
            
            return user;
        });
    }
    
    return service;
}]);
