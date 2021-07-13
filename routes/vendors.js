const express = require('express');
const router = express.Router();


// importing the models
const VendorModel = require('../model/vendors');
const ProductsModel = require('../model/products');
const vendorModel = require('../model/vendors');



router.get('/', (req, res)=>{
    res.send("This is Home Page");

});

router.post('/addVendor', (req, res)=>{

  instance = new VendorModel;

  instance._id = req.body.id
  instance.username = req.body.username;
  instance.name = req.body.name;
  instance.password = req.body.password
  instance.save((err, data)=>{
     if(data){ console.log(data); 
    res.send(data)}else{
       console.log(err);
     }
  });
});

// remove a vendor
let removeMsg = [];
router.delete('/removeVendor/:id', (req, res)=>{
 vendorModel.deleteOne({_id : req.params.id} , (err, success)=>{
  if(success){
    removeMsg.push("vendor has been removed")
    res.send(removeMsg[0]);
    console.log(removeMsg[0]);
    }else{
     console.log(err)
    };

 });
  
});

module.exports = router;
