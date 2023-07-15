import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const verifyToken=(req,res,next)=>{
    const token=req.cookies.access_token;

    if(!token){
        return next(createError(401,'you are not authentificated'));
        }
        jwt.verify(token,process.env.JWT
            ,(err,user)=>{
            if(err) return next(createError(403,"token is not valid"));
            req.user=user ;
            next()
        });
    }
    export const verifyuser= (req,res,next)=>{
        verifyToken(req,res,next,()=>{
            if(req.user.id===req.params.id || req.user.isAdmin){
                next();
            }
            else{
               return next(createError(403,"you are not authorized"));

            }
        })
    
    
        
    };

    export const verifyadmin= (req,res,next)=>{
        verifyToken(req,res,next,()=>{
            if(req.user.isAdmin){
                next();
            }
            else{
                return next(createError(403,"you are not authorized"));

            }
        })
    
    
    }