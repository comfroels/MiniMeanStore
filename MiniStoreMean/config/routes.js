module.exports = function Routes(app){
	var mongoose = require('mongoose');
	Customer = mongoose.model('Customer');
	Order = mongoose.model('Order');
	app.get('/', function(req,res) { 
	 		res.render('index', { title: 'Mini Store' });
	});
	app.post('/addOrder',function(req,res){
		var now = new Date();
		var str = now.toDateString();
		console.log(req.body);
		var or = {customer:req.body.customer,date:str,product:req.body.product,quantity:req.body.quantity};
		var o = new Order(or);
		o.save(function(err,a){
			if (!err){
				res.json(a);
			}
		});
	});

	app.post('/addCustomer',function(req,res){
		console.log(req.body);
		var now = new Date();
		var str = now.toDateString();
		var cus = {name:req.body.name,created:str};
		var c = new Customer(cus);
		c.save(function(err,a){
			if (!err) {
				res.json(a);
			}
		});
	});
	app.post('/getCustomers',function(req,res){
		Customer.find({},function(err,cus){
			var cust = {cust:cus};
			res.json(cust);
		});
	});
	app.post('/getOrders',function(req,res){
		Order.find({},function(err,ord){
			var order = {or:ord};
			console.log(ord);
			res.json(order);
		})
	});
	app.post('/deleteCustomer',function(req,res){
		Customer.remove({name:req.body.name},function(err,data){
			if (!err){
				res.json(data);
			}
		})
	});
};