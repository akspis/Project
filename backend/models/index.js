const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    city:{
        type:String,
        required:true,
    }
})
const users =new mongoose.model('users', UsersSchema);

module.exports = users;