const express = require('express');
const productModel = require('../model/products');
const router = express.Router();


// importing the models
const ProductModel = require('../model/products');
// const { populate } = require('../model/vendors');
const VendorModel = require('../model/vendors');

// read products
router.get('/allProducts', (req,res)=>{
   ProductModel.find({category: "tablet"}).populate('vendor').exec((err , docs)=>{
    if(err){res.status(400).send(err)
    }else{
      res.status(200).json(docs);
    }
  });
    // console.log("this are the data " + all);
});

router.post('/products', (req, res)=>{
    console.log("Post route reached");
   res.send( req.body);
   console.log(req.body);

  instance = new ProductModel;
   instance._id = req.body.id;
   instance.name = req.body.name;
   instance.quantity= req.body.quantity;
   instance.expiringDate= req.body.expiringDate;
   instance.description = req.body.description;
   instance.category= req.body.category;
   // this will be gotten from  the front end of vendor id
   instance.vendor = "60ec37302107df104c89a696";

 // save the instance
 instance.save((err, data)=>{
  if(data){ console.log(data); 
    // res.status(200).json(data)
  }else{
       console.log(err);
       res.status(400).send(err);
     }
});

});


// delete product
let deleteMsg = []
router.delete('/deleteProduct/:id', (req, res)=>{
  res.send("view product route ");
 productModel.deleteOne({_id:req.params.id}, (err, data)=>{
   if(err){console.log(err)}else{
     if(data){console.log("item deleted");
    deleteMsg.push("Product has been deleted");
    res.send(deleteMsg[0]);
  }
   }
 });
});


// Edit Product
let editProductMsg = [];
router.patch('/editProduct/:id', (req, res)=>{
  res.send(req.params.id);

  // destructuring
  const{name, description, expiringDate, cost, quantity, category} = req.body;
  
  // updatung thev products
  productModel.updateOne({_id:req.params.id}, {$set:{
    name, description, expiringDate, cost, quantity, category
  }}, (err, data)=>{
   if(data){
    editProductMsg.push("Product has been edited")
    // res.send(editProductMsg[0]);
    console.log(editProductMsg[0]);
   }
  })

});

// View a product

router.get('/viewProduct/:id', (req, res)=>{
  ProductModel.findById({_id: req.params.id}, (err , data)=>{
    console.log(data);
    res.send(data);
  
  }).populate('vendor')
});

module.exports = router;
