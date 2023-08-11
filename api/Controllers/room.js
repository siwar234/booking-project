import rooms from "../models/rooms.js";
import hotels from "../models/hotels.js";

export const createRoom=async (req,res,next)=>{
    const hotelId=req.params.hotelid;
    const newRoom= new rooms(req.body)
    try {
        const savedRoom=await newRoom.save()
        try{
            await hotels.findByIdAndUpdate(hotelId,{$push:{rooms:savedRoom._id}});
        }catch(err){
            next(err)
        }    res.status(200).json(savedRoom)

    }catch(err){
        next(err)
    }

};

export const updateRoom=async(req,res,next)=>{
    try {
        const data = await rooms.findOneAndUpdate(
          { _id: req.params.id },
          req.body,
          { new: true }
        );
        res.status(201).json(data);
      
    } catch(err){
        next(err)    } 
  }


  export const updateRoomavailability=async(req,res,next)=>{
    try {
        await rooms.updateOne(
            {"roomNumbers._id" : req.params.id},
            {$push :{
            "roomNumbers.$.unavailableDates":req.body.dates}},
            
        )
                res.status(201).json("room status has been updated ");
      
    } catch(err){
        next(err)    } 
  }

export const deleteRoom=async(req,res,next)=>{
    const hotelId=req.params.hotelid;
    try {
      await rooms.findByIdAndDelete(req.params.id);
        
        try{
            await hotels.findByIdAndUpdate(hotelId,
                {$pull:{rooms:req.params.id},
            });
        }catch(err){
            next(err)
        }
        res.status(201).json("room deleted");
      
    } catch(err){
        next(err)    } 
};

export const getallRoom=async(req,res,next)=>{
    // const failed=true;
    // if(failed) return next(createError(401,'you are not authentificated'));

    try {
        const data = await rooms.find();
        res.status(200).json(data);
       }catch(err){
        next(err)    } 
}