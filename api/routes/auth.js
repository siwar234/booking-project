import express from "express";
import { register ,login } from "../api/Controllers/authe.js";

const router=express.Router();

router.post("/",register)
router.post("/login",login)


export default router
