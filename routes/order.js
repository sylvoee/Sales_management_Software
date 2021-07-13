const express = require('express');
// const productModel = require('../model/products');
const router = express.Router();


// importing the models
const OrderModel = require('../model/order');
const VendorModel = require('../model/vendors');
const ProductModel = require('../model/products');

// read all orders
router.get('/allOrder', (req,res)=>{
  OrderModel.find({}).populate('vendor').exec((err , docs)=>{
    if(err){res.status(400).send(err)
    }else{
      res.status(200).json(docs);
    }
  });
    // console.log("this are the data " + all);
});


// View an orders
router.get('/viewOrder/:id', (req, res)=>{
  OrderModel.findById({_id: req.params.id}, (err , data)=>{
    console.log(data);
    res.send(data);


    // updatung the products
   // destructuring
 
  // productModel.updateOne({_id:req.params.id}, {$set:{
  //   quantity : parseInt(quantity) - parseInt(req.body.quantity)
  // }}, (err, data)=>{
  //  if(data){
  //   editProductMsg.push("Product has been edited")
  //   // res.send(editProductMsg[0]);
  //   console.log("quantity has been updated");
  //  }
  // })
  
  }).populate('vendor')
});




// post order or making an order
router.post('/order', (req, res)=>{
    console.log("post order route reached");
  //  res.send( req.body);
   console.log(req.body);

  instance = new OrderModel;
  // the below id will be gotten from the front end of viewProduct page
   instance._id = '60ec3b1e08b400123cf7ad99';
   instance.productName = req.body.name;
   instance.quantity= req.body.quantity;
   instance.cost= req.body.cost;
   instance.category= req.body.category;
   instance.customerName = req.body.customerName;
  instance.totalCost = parseInt(req.body.quantity) * parseInt(req.body.cost);

  // the below id front the vendor ID which can be gotten from the front end
   instance.vendor = "60ec37082107df104c89a693";

   

 // save the instance
 instance.save((err, data)=>{
  if(data){ console.log(data); 
    res.status(200).json(data)
  }else{
       console.log(err);
       res.status(400).send(err);
     }
});

});



module.exports = router;
