const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    // _id:mongoose.Schema.Types.ObjectId,
  productName:{type:String, required:true } ,
  quantity : {type:Number, required:true},
  cost:Number,
  category: String,
  totalCost: Number,
  customerName: String,
  customerPhoneNumber: Number,
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
  vendor: {
      required:true,
      type:mongoose.Schema.Types.ObjectId,
      ref:'Vendor'

  }
});

const OrderModel = mongoose.model('Order', orderSchema);
module.exports = OrderModel;