import { Document, Schema, model } from "mongoose";
const validator = require("validator");

export interface Istudent extends Document{
    name: string,
    phone: number,
    email: string,
    password:string
}

const studentSchema = new Schema<Istudent>({
    name: {
        type: String,
        required: [true, "Name is required."],
        trim: true,
        minLength: 5,
        maxLength: 150
    },
    phone:{
        type: Number,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, "Please enter a  valid email."],
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 100,
    }
}, {
    timestamps: true,
    versionKey: false,
});

export const Student = model("Student", studentSchema);
