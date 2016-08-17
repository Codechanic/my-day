angular.module('app.controllers').controller('PromiseController',PromiseController);


function PromiseController($scope, $rootScope,Promises,$timeout,$cordovaSocialSharing){

    var promises = Promises.filter(function(el){
        return el.text!="\r";
    });

    var index = Math.random()*100;
    while (index>promises.length-1 || index<0){
        index = Math.random()*100;
    }
    index=Math.round(index);

    $scope.promise = promises[index];
    $scope.isLoadind = false;

    $scope.reloadPromise = function()
    {
        $scope.isLoadind = true;
       $timeout(function(){

           do{
               index = Math.random()*100;
           }
           while (index>promises.length-1 || index<0);
           index=Math.round(index);
           $scope.promise = promises[index];
           $scope.isLoadind = false;
       },500);
    };

    //fb,tw,sms
    $scope.Share = function (via) {
        switch (via){
            case 'fb':
                $cordovaSocialSharing.shareViaFacebook(promises).then(function (result) {
                    ons.notification.alert({message: 'Share accomplish' });

                },function (reason) {
                    ons.notification.alert({message: 'Error while sharing out user: ' + reason.message })
                }   );
                break;
            case 'tw':
                $cordovaSocialSharing.shareViaTwitter(promises).then(function (result) {
                    ons.notification.alert({message: 'Share accomplish' });

                },function (reason) {
                    ons.notification.alert({message: 'Error while sharing out user: ' + reason.message })
                }   );
                break;
            default:
                $cordovaSocialSharing.shareViaSMS(promises).then(function (result) {
                    ons.notification.alert({message: 'Share accomplish' });

                },function (reason) {
                    ons.notification.alert({message: 'Error while sharing out user: ' + reason.message })
                }   );
                break;


        }

    }



}