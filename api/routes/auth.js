import express from "express";
import { login,register } from "../Controllers/authe.js";
const router=express.Router();

router.post("/",register)
router.post("/login",login)


export default router
