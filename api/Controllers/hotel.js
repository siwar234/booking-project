import hotels from "../models/hotels.js";

export const createhotel=async(req,res,next)=>{
    const newhotel=new hotels(req.body)
    try{

        const savedHotel=await newhotel.save()
        res.status(200).json(savedHotel)


    }catch(err){
next(err)    } 
};

export const getHotel = async (req, res, next) => {
  try {
    const hotel = await hotels.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
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

export const getHotels = async (req, res, next) => {
    const { min, max, ...others } = req.query;
    try {
      const data = await hotels.find({
        ...others,
        cheapestPrice: { $gt: min | 1, $lt: max || 300 },
      }).limit(req.query.limit);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };
//promise : multiple items 
export const countbycity=async(req,res,next)=>{
   const cities=req.query.cities.split(",")
    try {
        const list = await Promise.all(cities.map(city=>{
            return hotels.countDocuments({city:city})
        }))
        res.status(200).json(list);
       }catch(err){
        next(err)    } 
}

export const countByType=async(req,res,next)=>{
      try {
        const hotelCount=await hotels.countDocuments({type:"hotel"})
        const apartmentCount= await hotels.countDocuments({type:"apartment"})
        const resortcount=await hotels.countDocuments({type:"resort"})
        const VillaCount= await hotels.countDocuments({type:"villa"})
        const cabinCount=await hotels.countDocuments({type:"cabin"})
        res.status(200).json([
            {type:"hotel",count:hotelCount},
            {type:"apartmenet",count:apartmentCount},
            {type:"villa",count:VillaCount},
            {type:"cabin",count:cabinCount},
            {type:"resort",count:resortcount},


        ]);
    
        }catch(err){
         next(err)    } 
 }