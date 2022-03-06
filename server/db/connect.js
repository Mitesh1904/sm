require('dotenv').config();
const mongoose =require('mongoose');


const ConnectToDataBase=()=>{
  // console.log('Start Connections')
   mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true});
    
  //  console.log('Loading Connections');
   mongoose.connection
    .once('open',()=>console.log('connect data base'))
    .on('error',(error)=>console.log(error,123));
}

export {ConnectToDataBase};
