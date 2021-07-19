const express = require("express");
const cors = require("cors");
const router = express.Router();
const users = require("../models/index");


router.use(express.json());
router.use(cors());

router.put("/update/:id", async(req,res)=>{
    
    const result = await users.findOneAndUpdate({_id:req.params.id},{$set:{
        name: req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        city:req.body.city
    }})
     res.json(result);
    })
    
module.exports = router;