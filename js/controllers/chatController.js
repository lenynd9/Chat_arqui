app.controller('chatController', ['$scope', '$firebaseArray', '$location','FBURL', function($scope, $firebaseArray, $location, FBURL){
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
	//Creemos nuestro modulo de angular
    //Conectemos a Firebase
    var rootRef = firebase.database().ref('chats');

    
    //Para prevenir cualquier excepcion con nuestras variables, lo inicializamos a ""
    
    
    //Para prevenir cualquier excepcion con nuestras variables, lo inicializamos a ""
    $scope.nickname="";
    $scope.chats={};
    
    //Ahora crearemos la funcion que enviara nuestros chats a Firebase
    $scope.send = function(){
      if($scope.nickname === ""){
        $scope.nickname = "Anonimo";
      }
      var time = new Date();
      rootRef.push({
        sender : $scope.nickname,
        text : $scope.chatSend,
        time : time.toString()
      });
    };
    $scope.getTiempo = function(tiempo){
      var momentTiempo = moment(tiempo).fromNow();
      return momentTiempo;
    };
    
    
    var syncArreglo;
    var arreglo=rootRef.on('value', function(snapshot) {
        return $scope.chats= snapshot.val();
      }); 

  }]);