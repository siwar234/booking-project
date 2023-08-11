import express from "express";
import { createRoom, deleteRoom, getallRoom, updateRoom,updateRoomavailability } from "../Controllers/room.js";
import {  verifyadmin } from "../utils/verifyToken.js";

const router=express.Router();



router.post("/:hotelid",verifyadmin,createRoom);
   
router.put("/availability/:id",updateRoomavailability);


router.put("/:id", verifyadmin, updateRoom);

  router.delete("/:id/:hotelid" ,verifyadmin,deleteRoom)

  router.get("/",getallRoom)


export default router
