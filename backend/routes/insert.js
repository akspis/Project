const express = require("express");
const users = require("../models/index");
const router = express.Router();

router.post("/insert",  async(req, res) =>{   //inserting user data using post method
       try{
        const userList = new users({
            name: req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            city:req.body.city,
            });
         await userList.save();
         res.send("inserted")
       }
       catch(err){
        res.send({message: err.message})
    } 
    })

 module.exports = router;