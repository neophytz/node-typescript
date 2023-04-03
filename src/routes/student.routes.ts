import express, { Router } from "express";
import { create, getAllStudent } from "../controllers/student.controller";

const studentRouter : Router = express.Router();

studentRouter
    .get('/all', getAllStudent)
    .post('/', create)

export = studentRouter;