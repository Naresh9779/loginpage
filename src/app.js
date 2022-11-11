const express=require("express");
const app =express();
const path=require("path");

require("./db/conn");
const Register=require("./models/user")
const port =process.env.PORT||3000;
const static_path=path.join(__dirname,"../public");
app.use(express.static(static_path))
app.get("/",(req,res)=>{

res.render("index")

});

app.post("/user",async(req,res)=>{

    try{
  const registeruser= new user({


  username: req.body.username,
  email: req.body.email,
  password: req.body.password

  })

 const registered = await  registeruser.save();
 res.status(201).render("index");
    }
catch(error){

    res.status(400).send(error)
}

})

app.listen(port,()=>{


console.log('Listening..... At Port no ',port);



})