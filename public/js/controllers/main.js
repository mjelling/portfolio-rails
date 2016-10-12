angular
  .module('mainController', [])
  .controller('mainController', ['$scope',
    function($scope) {
      // $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
      $scope.visibilityProffessionally = 0;
      $scope.visibilityPersonally = 0;
      $scope.visibilityVinylHound = 0;
      $scope.visibilityRestaurantInterface = 0;
      $scope.visibilitySimon = 0;
      $scope.visibilityAddressBook = 0;
      $scope.visibilityBulletinBoard = 0;
      $scope.visibilityFeelTrip = 0;

      $scope.showProfessionally = function(){
        $scope.visibilityProffessionally = 1;
        $scope.visibilityPersonally = 0;
        $scope.visibilityVinylHound = 0;
        $scope.visibilityRestaurantInterface = 0;
        $scope.visibilitySimon = 0;
        $scope.visibilityAddressBook = 0;
        $scope.visibilityBulletinBoard = 0;
        $scope.visibilityFeelTrip = 0;
      };
      $scope.showPersonally = function(){
        $scope.visibilityProffessionally = 0;
        $scope.visibilityPersonally = 1;
        $scope.visibilityVinylHound = 0;
        $scope.visibilityRestaurantInterface = 0;
        $scope.visibilitySimon = 0;
        $scope.visibilityAddressBook = 0;
        $scope.visibilityBulletinBoard = 0;
        $scope.visibilityFeelTrip = 0;
      };
      $scope.showVinylHound = function(){
        $scope.visibilityProffessionally = 0;
        $scope.visibilityPersonally = 0;
        $scope.visibilityVinylHound = 1;
        $scope.visibilityRestaurantInterface = 0;
        $scope.visibilitySimon = 0;
        $scope.visibilityAddressBook = 0;
        $scope.visibilityBulletinBoard = 0;
        $scope.visibilityFeelTrip = 0;
      };
      $scope.showRestaurantInterface = function(){
        $scope.visibilityProffessionally = 0;
        $scope.visibilityPersonally = 0;
        $scope.visibilityVinylHound = 0;
        $scope.visibilityRestaurantInterface = 1;
        $scope.visibilitySimon = 0;
        $scope.visibilityAddressBook = 0;
        $scope.visibilityBulletinBoard = 0;
        $scope.visibilityFeelTrip = 0;
      };
      $scope.showSimon = function(){
        $scope.visibilityProffessionally = 0;
        $scope.visibilityPersonally = 0;
        $scope.visibilityVinylHound = 0;
        $scope.visibilityRestaurantInterface = 0;
        $scope.visibilitySimon = 1;
        $scope.visibilityAddressBook = 0;
        $scope.visibilityBulletinBoard = 0;
        $scope.visibilityFeelTrip = 0;
      };
      $scope.showAddressBook = function(){
        $scope.visibilityProffessionally = 0;
        $scope.visibilityPersonally = 0;
        $scope.visibilityVinylHound = 0;
        $scope.visibilityRestaurantInterface = 0;
        $scope.visibilitySimon = 0;
        $scope.visibilityAddressBook = 1;
        $scope.visibilityBulletinBoard = 0;
        $scope.visibilityFeelTrip = 0;
      };
      $scope.showBulletinBoard = function(){
        $scope.visibilityProffessionally = 0;
        $scope.visibilityPersonally = 0;
        $scope.visibilityVinylHound = 0;
        $scope.visibilityRestaurantInterface = 0;
        $scope.visibilitySimon = 0;
        $scope.visibilityAddressBook = 0;
        $scope.visibilityBulletinBoard = 1;
        $scope.visibilityFeelTrip = 0;
      };
      $scope.showFeelTrip = function(){
        $scope.visibilityProffessionally = 0;
        $scope.visibilityPersonally = 0;
        $scope.visibilityVinylHound = 1;
        $scope.visibilityRestaurantInterface = 0;
        $scope.visibilitySimon = 0;
        $scope.visibilityAddressBook = 0;
        $scope.visibilityBulletinBoard = 0;
        $scope.visibilityFeelTrip = 1;
      };
      $scope.showVinylHound();



  }
]);
