(function() {
     function MessageCtrl(Message, Room, $scope, $rootScope) {
            
            this.currentRoomName= $rootScope.selectedRoom.name;
            this.currentRoomId= $rootScope.selectedRoom.$id;
             
                $scope.allMessages= Message.getByRoomId(this.currentRoomId);
         
            }
            
     angular
         .module('blocChat')
         .controller('MessageCtrl', ['Message', 'Room', '$scope', '$rootScope', MessageCtrl]);
 })();