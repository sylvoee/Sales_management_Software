const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    // _id:mongoose.Schema.Types.ObjectId,
  name:String  ,
  quantity : Number,
  category: String,
  description:String,
  expirinfDate: Date,
  cost:Number,
  totalCost: Number,
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
  vendor: {
      required:true,
      type:mongoose.Schema.Types.ObjectId,
      ref:'Vendor'

  }



});

const productModel = mongoose.model('Product', productSchema);
module.exports = productModel;