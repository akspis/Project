const express = require("express");
const router = express.Router();
const users = require("../models/index");


router.put("/update/:id", async(req,res)=>{  // updating users data using put method
    
    const result = await users.findOneAndUpdate({_id:req.params.id},{$set:{
        name: req.body.name,
        email:req.body.email,
        phone:Number(req.body.phone),
        city:req.body.city
    }})
     res.json(result);
    })
    
module.exports = router;