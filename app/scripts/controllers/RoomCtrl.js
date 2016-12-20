(function() {
     function RoomCtrl(Room, $scope) {
        $scope.availRooms = Room.all;
         console.log(Room.all);
     }
 
     angular
         .module('blocChat')
         .controller('RoomCtrl', ['Room', '$scope', RoomCtrl]);
 })();