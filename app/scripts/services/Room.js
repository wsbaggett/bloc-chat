(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    var addRoom = function(name) {
            rooms.$add({ "name" : name });
        }
    return {
      all: rooms, 
        addIt: addRoom
    }
  };

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();