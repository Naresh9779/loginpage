const mongoose=require("mongoose");

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

const  user= new mongoose.model("Register",userSchema);
module.exports=user;