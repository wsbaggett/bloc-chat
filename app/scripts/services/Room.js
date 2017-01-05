(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    var addRoom = function(name) {
            rooms.$add({ "name" : name });
        }
    
    var currentRoom = null;
    var selectRoom = function(room) {
        
        currentRoom = room;
    }
    var getRoom = function() {
        return currentRoom;
    }
    
    return {
      all: rooms, 
      addIt: addRoom,
      selectRoom: selectRoom,
      currentRoom: getRoom
    }
  };

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();