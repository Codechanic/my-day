angular.module('app.controllers').controller('PromiseController',PromiseController);


function PromiseController($scope,Promises,$timeout,$cordovaSocialSharing){

   
    var promises = Promises.filter(function(el){
        return el.text!="\r";
    });


    var index  = Math.floor(Math.random()*(promises.length-1)) + 1;

    $scope.promise = promises[index];
    $scope.isLoadind = false;

    $scope.reloadPromise = function()
    {
        $scope.isLoadind = true;
       $timeout(function(){

           index  = Math.floor(Math.random()*(promises.length-1)) + 1;
           $scope.promise = promises[index];
           $scope.isLoadind = false;
       },500);
    };

    //fb,tw,sms
    $scope.Share = function (via) {
        switch (via){
            case 'fb':
                $cordovaSocialSharing.shareViaFacebook($scope.promise).then(function (result) {
                    ons.notification.alert({message: 'Share accomplish' });

                },function (reason) {
                    ons.notification.alert({message: 'Error while sharing out user: ' + reason.message })
                }   );
                break;
            case 'tw':
                $cordovaSocialSharing.shareViaTwitter($scope.promise).then(function (result) {
                    ons.notification.alert({message: 'Share accomplish' });

                },function (reason) {
                    ons.notification.alert({message: 'Error while sharing out user: ' + reason.message })
                }   );
                break;
            default:
                $cordovaSocialSharing.shareViaSMS($scope.promise).then(function (result) {
                    ons.notification.alert({message: 'Share accomplish' });

                },function (reason) {
                    ons.notification.alert({message: 'Error while sharing out user: ' + reason.message })
                }   );
                break;


        }

    };
    
    $scope.ShareNative = function (promise) {
        $cordovaSocialSharing
            .share(promise, "Promesas", undefined, undefined) // Share via native share sheet
            .then(function(result) {
                // ons.notification.alert({message: 'Error while sharing out user: ' + reason.message })
            }, function(err) {
                ons.notification.alert({message: 'Error while sharing out user: ' + reason.message })
            });
    }



}