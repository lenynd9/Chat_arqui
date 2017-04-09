app.controller('regController', ['$scope', '$firebaseAuth', '$location','FBURL', function($scope, $firebaseAuth, $location, FBURL){
/*	
	var config = {
    apiKey: "AIzaSyCsakwDqTDU4WKSngcAJIGUgu0BKF9JqdM",
    authDomain: "appchat-92897.firebaseapp.com",
    databaseURL: "https://appchat-92897.firebaseio.com",
    projectId: "appchat-92897",
    storageBucket: "appchat-92897.appspot.com",
    messagingSenderId: "835221380500"
  };
  firebase.initializeApp(config);
*/
	$scope.signUp = function(){
		var email = $scope.reg.email;
		var password = $scope.reg.password;

		if(email && password){
			
			firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
				$location.path('/chat');
			}).catch(function(error){
				var errorCode = error.code;
  				var errorMessage = error.message;
			});
		}
	};

}]);