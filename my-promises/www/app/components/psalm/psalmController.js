/**
 * Created by ASUS on 15/08/2016.
 */
angular.module('app.controllers').controller('PsalmController',PsalmController);

function PsalmController($scope,$rootScope,PsalmsTree,Book,$timeout) {
    $scope.PsalmTree = PsalmsTree;
    $scope.category= {};
    $scope.chapter= {};
    $scope.psalm= -1;
    var Book = Book;

    $scope.toOpen = function (category) {
        if (category==$scope.category) {
            $scope.category= {};
        }
        else{
            $scope.category = category;
        }

    };

    $scope.isOpen = function (category) {
        return category.title==$scope.category.title;
    };
    
    $scope.showCategory=function () {
        return $scope.psalm==-1;
    };
    
    $scope.showPsalm=function () {
      return   $scope.psalm!=-1;
    };
    
    $scope.Reset=function () {

        $timeout(function () {
            $scope.$apply($scope.psaml=-1);
            $scope.$apply($scope.chapter={});
        },500);
    };
    $scope.openPsalm = function (psalm) {
        if (psalm == $scope.psalm) {
            $scope.psalm=-1;
        }  
        else{
            $scope.psalm = parseInt(psalm);
            $scope.chapter = Book.chapters[$scope.psalm-1];
        }
    }
}