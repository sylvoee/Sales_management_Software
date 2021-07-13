const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
//   name:String  ,
// _id: mongoose.Schema.Types.ObjectId,
  username: {type:String, require: true},
  name: {type:String, require:true},
  password : String,
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
});

const vendorModel = mongoose.model('Vendor', vendorSchema);
module.exports = vendorModel;