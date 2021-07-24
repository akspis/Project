const express = require("express");
const router = express.Router();
const users = require("../models/index");

router.delete("/delete/:id",async(req,res)=>{
    const id = req.params.id;
    await users.findByIdAndRemove(id);
    res.send("user Deleted");
})

module.exports = router;

