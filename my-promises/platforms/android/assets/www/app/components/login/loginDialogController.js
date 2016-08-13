// This is a JavaScript file

'use strict';

angular.module('app.controllers').controller('LoginDialogController', ['$scope', '$rootScope', 'UserService', '$translate',function($scope, $rootScope, UserService, $translate) {

    $scope.user = UserService.getUser();
    var ref = new Firebase(FIREBASE_SERVER_URL);
    
    $scope.twConnect = function (material) {
        
        modal.show();
        
        ref.authWithOAuthPopup("twitter", function(error, authData) {
            
            modal.hide();
            
            if (error) {
                console.log("Login Failed!", error);
            
                ons.notification.alert({
                  message: 'An error has occurred!',
                  modifier: material ? 'material' : undefined
                });
            
            
            } else {
                loginDialog.hide();
                
                console.log("Authenticated successfully with payload:", authData);
                UserService.getUserByUid("tw_uid", authData.uid).then(function(user){
                    
                    if (user && user.uid) {
                        UserService.setUser(user);
                    }
                    
                    UserService.fillTWUser(authData);
                });
                
            }
        });

        
    }
    
    $scope.fbConnect = function (material) {
        
        modal.show();
        
        ref.authWithOAuthPopup("facebook", function(error, authData) {
            
            modal.hide();
            
            if (error) {
                console.log("Login Failed!", error);
            
                ons.notification.alert({
                  message: 'An error has occurred!',
                  modifier: material ? 'material' : undefined
                });
            
            
            } else {
                loginDialog.hide();
                
                console.log("Authenticated successfully with payload:", authData);
                UserService.getUserByUid("fb_uid", authData.uid).then(function(user){
                    
                    if (user && user.uid) {
                        UserService.setUser(user);
                    }
                    
                    UserService.fillFBUser(authData);
                });
                
            }
        });

        
    }
    
}]);
