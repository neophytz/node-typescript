import express, { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";

const studentRouter : Router = express.Router();

studentRouter.get('/', (req:Request, res:Response) : void => {
    res.status(StatusCodes.OK).json({
        status:"ok",
        message:"Hello student"
    })
    return;
})

studentRouter.post('/', (req:Request, res:Response) : void => {
    console.log(req.body);
    res.status(StatusCodes.CREATED).json({
        status:"ok",
        message:"created new entry."
    })
    return;
})

export = studentRouter;