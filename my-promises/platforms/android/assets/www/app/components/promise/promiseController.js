angular.module('app.controllers').controller('PromiseController',PromiseController);


function PromiseController($scope, $rootScope,Promises,$timeout){

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
    }



}