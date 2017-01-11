(function() {
  function Message($firebaseArray, $cookies) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
      
    return {
      getByRoomId: function (roomId) {
        // Filter the messages by their room ID.
        return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId)); 
      },
      send: function(roomId, msgContent) {
          var currentUser = $cookies.get('blocChatCurrentUser');
          var date = new Date();
          var month = date.getMonth() + 1;
          var currDateTime = (month + '/' + date.getDate() + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes());
          
          var newMessage =  {content: msgContent, roomId: roomId, sentAt: currDateTime, username: currentUser};
          
             messages.$add(newMessage); 
      }
    };  
    
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();