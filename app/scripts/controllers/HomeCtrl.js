(function() {
     function HomeCtrl() {
         this.heroTitle = "Bloc Chat";
     }
 
     angular
         .module('blocChat')
         .controller('HomeCtrl', HomeCtrl);
 })();