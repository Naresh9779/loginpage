const mongoose=require("mongoose");
const { stringify } = require("qs");
const userSchema =new mongoose.Schema({

username:
{
    type:String,
    required:true
},

email: {

    type:String,
    unique:true,
    required:true

},
password : {

type:String,
unique:true,
    required:true

}





})

const  Register = new mongoose.model("Register",userSchema);
module.exports=Register;