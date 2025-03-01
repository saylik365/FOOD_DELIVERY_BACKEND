import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please tell us your first name!"],
        minLength: [3, "First name must have at least 3 characters!"],
        maxLength: [30, "First name can not exceed 30 characters!"],
    },
    lastName: {
        type: String,
        required: [true, "Please tell us your last name!"],
        minLength: [3, "Last name must have at least 3 characters!"],
        maxLength: [30, "Last name can not exceed 30 characters!"],
    },
    email: {        
        type: String,
        required: [true, "Please provide your email address!"],
        validate : [validator.isEmail, "Please provide a valid email address!"],
        unique: true,
    },
    phone: {
        type: String,
        required: [true, "Please provide your phone number!"],
        minLength: [10, "Phone number must have at least 10 characters!"],
        maxLength: [10, "Phone number can not exceed 10 characters!"],
    },
    date: {
        type: Date,
        required: [true, "Please provide a date for Order!"],
    },
    time: {
        type: String,
        required: [true, "Please provide a time for Order!"],
    },

});

export const Reservation = mongoose.model("Reservation", reservationSchema);