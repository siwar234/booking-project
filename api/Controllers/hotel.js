import hotels  from "../models/hotels.js"

export const createhotel=async(req,res,next)=>{
    const newhotel=new hotels(req.body)
    try{

        const savedHotel=await newhotel.save()
        res.status(200).json(savedHotel)


    }catch(err){
next(err)    } 
};


export const updatehotel=async(req,res,next)=>{
    try {
        const data = await hotels.findOneAndUpdate(
          { _id: req.params.id },
          req.body,
          { new: true }
        );
        res.status(201).json(data);
      
    } catch(err){
        next(err)    } 
  }

export const deletehotel=async(req,res,next)=>{
    try {
        const data = await hotels.findByIdAndDelete(
          { _id: req.params.id },
       
        );
        res.status(201).json("hotel deleted");
      
    } catch(err){
        next(err)    } 
};

export const getallhotel=async(req,res,next)=>{
    // const failed=true;
    // if(failed) return next(createError(401,'you are not authentificated'));

    try {
        const data = await hotels.find();
        res.status(200).json(data);
       }catch(err){
        next(err)    } 
}