const express = require("express");
const router = express.Router();
const users = require("../models/index");

router.get("/read" , async(req,res)=>{   //getting data from mongodb atlas
   await users.find({} ,(error, result) =>{
        if(error){
            res.send(error)
        }
        else{
            res.send(result);
        }
    } )
})

module.exports = router;