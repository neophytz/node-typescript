import express, { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";

const adminRouter : Router = express.Router();

adminRouter.get('/', (req:Request, res:Response) : void => {
    res.status(StatusCodes.OK).json({
        status:"ok",
        message:"Working Absolutely fine!"
    })
    return;
})

adminRouter.post('/', (req:Request, res:Response) : void => {
    console.log(req.body);
    res.status(StatusCodes.CREATED).json({
        status:"ok",
        message:"created new entry."
    })
    return;
})

export = adminRouter;