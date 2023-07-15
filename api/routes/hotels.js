import express, { request } from "express";
import { createhotel, deletehotel, getallhotel, updatehotel } from "../api/Controllers/hotel.js";
import {  verifyadmin } from "../utils/verifyToken.js";

const router=express.Router();


router.post("/",verifyadmin,createhotel);
   


router.put("/:id", verifyadmin, updatehotel);

  router.delete("/:id" ,verifyadmin,deletehotel)

  router.get("/",getallhotel)



export default router;
