const express = require("express");
const users = require("../models/index");
const router = express.Router();
const cors = require("cors");

router.use(cors());
router.use(express.json());

router.get("/view/:id" ,async (req,res)=>{
    const id = req.params.id;
    try{ const result = await users.findById(id);
        res.send(result)
    }
    catch(err){
        res.send({message: err.message})
    }    
 })

 module.exports = router;