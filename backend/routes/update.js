const express = require("express");
const cors = require("cors");
const router = express.Router();
const users = require("../models/index");


router.use(express.json());
router.use(cors());

router.put("/update/:id", async(req,res)=>{
    const id = req.params.id;
    const userList = new users({
        newname: req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        city:req.body.city,
        })
        try{
           const result = await users.findOneAndUpdate(id,{$set:userList})
            result.save();
            res.json(result)
        }
        catch(err){
          res.json({message: err.message});
        }
    })
    
module.exports = router;