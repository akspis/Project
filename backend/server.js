const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const users = require("./models/index")


const app = express()

const Port = process.env.Port || 5000;

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://akshay:akshay@cluster0.viv8h.mongodb.net/webapp?retryWrites=true&w=majority", 
{useNewUrlParser:true, useUnifiedTopology: true , useFindAndModify: false},
()=>{console.log("connected succesfully")})

app.use(require("./routes/insert"));
app.use(require("./routes/read"));
app.use(require(`./routes/update`));

app.get("/view/:id" ,async (req,res)=>{
    const id = req.params.id;
    try{ const result = await users.findById(id);
        res.send(result)
    }
    catch(err){
        res.send({message: err.message})
    }    
 })
 
app.delete("/del/:id", async(req,res)=>{
    const id = req.params.id;
    await users.findByIdAndRemove(id);
    res.send("user Deleted");
    }
)
app.listen(Port, ()=>{
    console.log("Port is running on " + Port);
})