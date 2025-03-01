import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
  const { firstname, lastname, email, phone, date, time } = req.body;

  // Check if all fields are provided
  if (!firstname || !lastname || !email || !phone || !date || !time) {
    // return next(new ErrorHandler("Please fill all the fields!", 400));
    return next(new ErrorHandler(400, "Please fill all the fields!"));

  }

  try {
    // ✅ Ensure consistency in variable names
    await Reservation.create({
      firstname,  // Fix variable name
      lastname,   // Fix variable name
      email,
      phone,
      date,
      time,
    });

    res.status(200).json({
      success: true,
      message: "Reservation has been successfully created!",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(validationErrors.join(","), 400));
    }
    return next(error);
  }
};
