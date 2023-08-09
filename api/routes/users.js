import express, { request } from "express";

import { deleteuser, getallusers, updateuser } from "../Controllers/User.js";
import { verifyToken, verifyadmin, verifyuser } from "../utils/verifyToken.js";

const router=express.Router();

// router.get("/checkauthentification",verifyToken,(req,res,next)=>{
//     res.send("hello user, you are logged in")
// } )



// router.get("/checkuser/:id",verifyuser,(req,res,next)=>{
//     res.send("hello user, you are logged in and you can delete your account")
// } )


// router.get("/checkadmin/:id",verifyadmin,(req,res,next)=>{
//     res.send("hello admin, you are logged in and you can delete all accounts")
// } )



router.put("/:id" ,verifyuser,updateuser)

  router.delete("/:id" ,verifyuser,deleteuser)

  router.get("/",verifyadmin,getallusers)

export default router
