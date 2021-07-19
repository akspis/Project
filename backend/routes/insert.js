const express = require("express");
const users = require("../models/index");
const router = express.Router();
const cors = require("cors");

router.use(cors());
router.use(express.json());

router.post("/insert",  (req, res) =>{
    const userList = new users({
        name: req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        city:req.body.city,
        });
     userList.save();
    res.send("inserted")
 })

 module.exports = router;