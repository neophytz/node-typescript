import { Request, Response } from "express"
import { Istudent, Student } from "../schemas/student.schema"
import { StatusCodes } from "http-status-codes"
import { http_formatter } from "../util"
import bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { env } from "../env";

export const getAllStudent = (req: Request, res: Response) => {
    Student.find({}).then((result) => {
        res.status(StatusCodes.OK).json(http_formatter(result));
    }).catch(
        (error) =>
            res.status(StatusCodes.BAD_REQUEST).json(http_formatter(error, 'failure', false))
    );
}

export const create = async (req: Request, res: Response) => {
    const oldPassword = req.body.password;
    const salt = bcrypt.genSaltSync(10);
    const securePassword = await bcrypt.hash(oldPassword, salt);
    req.body.password = securePassword;

    const _userBody: Istudent = req.body;

    const _user = new Student(_userBody)
    return _user.save().then(result => {
        const token = jwt.sign(_userBody, env().secretKey as string);
        res.status(StatusCodes.OK).json(http_formatter({ result: result, token: token }, "Student Created Successfully", true))
    }).catch(err => {
        res.status(StatusCodes.BAD_REQUEST).json(http_formatter(err, 'Unable to create user', false))
    })
}