import user from "../models/user.js";


export const updateuser=async(req,res,next)=>{
    try {
        const data = await user.findOneAndUpdate(
          { _id: req.params.id },
          req.body,
          { new: true }
        );
        res.status(201).json(data);
      
    } catch(err){
        next(err)    } 
  }

export const deleteuser=async(req,res,next)=>{
    try {
        const data = await user.findByIdAndDelete(
          { _id: req.params.id },
       
        );
        res.status(201).json("user deleted");
      
    } catch(err){
        next(err)    } 
};

export const getallusers=async(req,res,next)=>{
    // const failed=true;
    // if(failed) return next(createError(401,'you are not authentificated'));

    try {
        const data = await user.find();
        res.status(200).json(data);
       }catch(err){
        next(err)    } 
}