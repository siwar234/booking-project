import express, { request } from "express";
import { createhotel, deletehotel, getHotels, updatehotel,countbycity, countByType,getHotel } from "../Controllers/hotel.js";
import {  verifyadmin } from "../utils/verifyToken.js";

const router=express.Router();


router.post("/",verifyadmin,createhotel);
   


router.put("/:id", verifyadmin, updatehotel);

  router.delete("/:id" ,verifyadmin,deletehotel)
  router.get("/find/:id",getHotel)

  
  router.get("/get",getHotels)
  router.get("/countbycity",countbycity)
  router.get("/countbytype",countByType)




export default router;
