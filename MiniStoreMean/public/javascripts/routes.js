myApp.config(function($routeProvider){
	$routeProvider
		.when('/',
		{
			templateUrl: './javascripts/partials/customer.html'
		})
		.when('/orders',
		{
			templateUrl: './javascripts/partials/order.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});