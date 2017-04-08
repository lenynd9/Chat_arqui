app.controller('ListController', ['$scope', '$firebaseArray', 'FBURL', function($scope,$firebaseArray, FBURL){
  var products = new Firebase(FBURL);
  $scope.products = $firebaseArray(products);
}]);