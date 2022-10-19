const mongoose =require("mongoose");
const DB = 'mongodb://localhost:27017';
mongoose.connect(DB,{

 useNewUrlParser:true,
 useUnifiedTopology:true,
 //useCreateIndex:true
  //useFindAndModify:false
}).then(()=>{


    console.log('connection sucessful');
}).catch((e)=>{


console.log('no connection');

})