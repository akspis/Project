const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const users = require("./models/index")


const app = express()

const Port = process.env.Port || 5000;

app.use(express.json());

// what will happend if we comment this?
app.use(cors());

mongoose.connect("mongodb+srv://akshay:akshay@cluster0.viv8h.mongodb.net/webapp?retryWrites=true&w=majority", 
{useNewUrlParser:true, useUnifiedTopology: true , useFindAndModify: false},
()=>{console.log("connected succesfully")})

app.use(require("./routes/insert"));
app.use(require("./routes/read"));
app.use(require(`./routes/update`));
app.use(require(`./routes/view`));
 

// why do specioal?
app.delete("/del/:id", async(req,res)=>{ //deleting user data using delete method 
    const id = req.params.id;
    await users.findByIdAndRemove(id);
    res.send("user Deleted");
    }
)
app.listen(Port, ()=>{
    console.log("Port is running on " + Port);
})
