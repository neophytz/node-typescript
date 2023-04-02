import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const auth = (req:Request, res:Response, next:NextFunction) : void  => {
    const {token} = req.headers;
    console.log("I am in auth middleware!");
    if(token!=='admin'){
        res.status(StatusCodes.UNAUTHORIZED).json({
            message:"You are Unauthorized"
        })
        return;
    }
    next();
}

export = auth;