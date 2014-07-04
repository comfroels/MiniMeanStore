myApp.controller('customer_controller',function($scope,CustomerFactory){
	CustomerFactory.getCustomers(function(data){
		$scope.customers = data;
	});
	
	$scope.addCustomer = function () {
		var same = false;
		$scope.error = "";
		for (var i = 0; i < $scope.customers.length; i++) {
			if ($scope.new_customer.name == $scope.customers[i].name) {
				$scope.error = "That customer already exists! Choose a different name...";
				same = true;
			}
		}
		if (!same) {
			CustomerFactory.addNewCustomer($scope.new_customer,function(){
				CustomerFactory.getCustomers(function(data){
					$scope.customers = data;
				});
			});
		}
	}
	$scope.deleteCustomer = function(info) {
		var data = {name:info};
		CustomerFactory.deleteOldCustomer(data,function(){
			CustomerFactory.getCustomers(function(data){
				$scope.customers = data;
			});
		});
	}
});