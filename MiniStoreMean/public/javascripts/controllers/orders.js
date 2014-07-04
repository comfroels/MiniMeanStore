myApp.controller('order_controller',function($scope,OrderFactory,CustomerFactory){
	CustomerFactory.getCustomers(function(data){
		$scope.customers = data;
	});
	OrderFactory.getOrders(function(data){
		$scope.orders = data;
	});
	$scope.addOrder = function(){
		OrderFactory.addNewOrder($scope.new_order,function(){
			OrderFactory.getOrders(function(data){
				$scope.orders = data;
			});
		});
	}
});