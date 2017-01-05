(function() {
     function RoomCtrl(Room, Message, $scope, $rootScope) {
        $scope.availRooms = Room.all;
         
         this.selectRoom = function(room) {
             // Tell room service what room is active
             Room.selectRoom(room);
             $rootScope.selectedRoom=room;
         }
     }
 
     angular
         .module('blocChat')
         .controller('RoomCtrl', ['Room', 'Message', '$scope', '$rootScope', RoomCtrl]);
 })();