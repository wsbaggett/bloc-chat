(function() {
     function MessageCtrl(Message, Room, $scope, $rootScope) {
            
            this.currentRoomName= $rootScope.selectedRoom.name;
            this.currentRoomId= $rootScope.selectedRoom.$id;
            var roomId = this.currentRoomId;
             
                $scope.allMessages= Message.getByRoomId(this.currentRoomId);
               
                $scope.sendMessage = function() {
                    
                 if ($scope.messageText) {  
                    var msgContent = $scope.messageText.trim();
               
                      if (msgContent != "") {  
                         Message.send(roomId, msgContent);
                      }
                   $scope.messageText = ""; 
                 }
               }
         
            }
            
     angular
         .module('blocChat')
         .controller('MessageCtrl', ['Message', 'Room', '$scope', '$rootScope', MessageCtrl]);
 })();