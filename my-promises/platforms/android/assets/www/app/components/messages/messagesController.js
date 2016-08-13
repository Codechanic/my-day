// This is a JavaScript file

'use strict';

angular.module('app.controllers').controller('MessagesController', ['$scope', '$rootScope', 'UserService', '$translate',function($scope, $rootScope, UserService, $translate) {

    $scope.user = UserService.getUser();
    $scope.authDataLocal = UserService.getAuthDataLocal();
    var ref = new Firebase(FIREBASE_SERVER_URL);

    $scope.init = function() {
        if (!$scope.user) {
            ref.authAnonymously(function(error, authData) {
                if (error) {
                    console.log("Login Failed!", error, authData);

                } else {

                    authData = JSON.stringify(authData);
                    $scope.authDataLocal = authData;
                    console.log("Authenticated successfully with payload:", authData);

                    $scope.user = {uid: authData.uid, auth: false};

                    UserService.setAuthDataLocal(authData);
                    UserService.saveUser(localUser);

                }
            });

        }
    }

    $scope.init();
    
}]);
