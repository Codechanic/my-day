/**
 * Created by ASUS on 15/08/2016.
 */
angular.module('app.controllers').controller('PsalmController',PsalmController);

function PsalmController($scope,$rootScope,PsalmsTree,Book) {
    $scope.PsalmTree = PsalmsTree;
    $scope.category= {};
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
    }
}