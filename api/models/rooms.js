import mongoose  from "mongoose";
const roomschema = mongoose.Schema({

    tittle:{
        type:String,
        required:true,
       
    },
    price:{
        type:Number,
        required:true,
      

    },
    maxpeople:{
        type:Number,
        required:true,

    },
 
    desc:{
        type:String,
        required:true,
    },
    roomNumbers:[{
    number:Number,unavailableDates :{type:[Date]  }
    }],
},{timestamps:true})

export default mongoose.model("rooms",roomschema)