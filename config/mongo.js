const mongoose = require("mongoose");

const NODE_DEV = process.env.NODE_DEV;
const dbConnect = () => {

    
    const DB_URI = (NODE_DEV=== 'test')? process.env.DB_URI_TEST : process.env.DB_URI ;
    mongoose.connect(
        DB_URI,
         {
        //userNewUrlParser:true,
        useUnifiedTopology:true,
    },
    (err,res) => {
        
        if(!err){
        }else{
             console.log(err)
        }
    }
    );

};

module.exports = dbConnect