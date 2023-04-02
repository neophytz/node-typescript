import { Router } from "express";
import adminRouter from "./admin.routes";
import studentRouter from "./student.routes";

const __routes : Record<string, Router> = {
    "student" : studentRouter,
    "admin" : adminRouter
}

export = __routes;

/**
 * word -> meaning
 * key -> value (pair)
 * "student": studentRouter,
 * "admin": adminRouter
 * type -> Record <key_type, value_type>
 */