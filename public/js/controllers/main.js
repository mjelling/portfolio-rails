angular
  .module('mainController', [])
  .controller('mainController', ['$scope',
    function($scope) {
      // $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
      $scope.visibilityProffessionally = 1;
      $scope.visibilityPersonally = 0;
      $scope.visibilityVinylHound = 0;
      $scope.visibilityRestaurantInterface = 1;
      $scope.visibilitySimon = 0;
      $scope.visibilityFeelTrip = 0;
      $scope.visibilityAddressBook = 0;
      $scope.visibilityBulletinBoard = 0;



  }
]);
