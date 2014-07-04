var mongoose = require('mongoose');
var OrderSchema = new mongoose.Schema({
	customer: String,
	date: String,
	product: String,
	quantity: Number
});
OrderSchema.path('customer').required(true, 'Name cannot be blank');
OrderSchema.path('product').required(true,'Product is required');
OrderSchema.path('quantity').required(true,'Quantity is required');
mongoose.model('Order',OrderSchema);