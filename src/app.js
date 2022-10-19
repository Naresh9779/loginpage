const express=require("express");
const app =express();
const path=require("path")

require(". /db/conn");
const port =process.env.PORT||3000;
const static_path=path.join(__dirname,"../public");
app.use(express.static(static_path))
app.get("/",(req,res)=>{


 
res.send("hLo World");
console.log("Request Recived ..........");

});

app.listen(port,()=>{


console.log('Listening..... At Port no ',port);



})