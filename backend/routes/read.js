const express = require("express");
const router = express.Router();
const users = require("../models/index");

router.get("/read" , (req,res)=>{
    users.find({} ,(error, result) =>{
        if(error){
            res.send(error)
        }
        else{
            res.send(result);
        }
    } )
})

module.exports = router;