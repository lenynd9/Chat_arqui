app.controller('loginController', ['$scope', '$firebaseAuth', '$location','FBURL', function($scope, $firebaseAuth, $location, FBURL){
	
	/*var config = {
    apiKey: "AIzaSyCsakwDqTDU4WKSngcAJIGUgu0BKF9JqdM",
    authDomain: "appchat-92897.firebaseapp.com",
    databaseURL: "https://appchat-92897.firebaseio.com",
    projectId: "appchat-92897",
    storageBucket: "appchat-92897.appspot.com",
    messagingSenderId: "835221380500"
  };
  firebase.initializeApp(config);*/

	$scope.signIn = function(){
		var email = $scope.log.email;
		var password = $scope.log.password;

		if(email && password){
			
			firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
				$location.path('/chat');
			}).catch(function(error){
				console.log(error.code);
				console.log(error.message);
			});
		}
	};

}]);