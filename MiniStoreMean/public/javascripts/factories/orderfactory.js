myApp.factory('OrderFactory',function($http){
	var factory = {};
	
	factory.getOrders = function(callback) {
		$http({method:'POST',url:'/getOrders'}).success(function(data,status,headers,config){
			var orders = data.or;
			callback(orders);
		}).error(function(data,status,headers,config){
			console.log(status);
		});
	}
	factory.addNewOrder = function(info,callback) {
		$http({method:'POST',url:'/addOrder',data:info}).success(function(data,status,headers,config){
			console.log(data);
			callback();
		}).error(function(data,status,headers,config){
			console.log(status);
		});
		
	}
	return factory;
});