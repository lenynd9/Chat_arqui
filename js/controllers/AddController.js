app.controller('AddController', ['$scope', '$firebaseArray', '$location', 'FBURL', function($scope, $firebaseArray, $location, FBURL){
  var ref = new Firebase(FBURL);
  var product = $firebaseArray(ref);
  $scope.addProduct = function() {
    product.$add({
      sku: $scope.product.sku,
      description: $scope.product.description,
      price: $scope.product.price
    });
    $location.path('/');
  };

}]);