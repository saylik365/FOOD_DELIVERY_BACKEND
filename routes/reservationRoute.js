import express from 'express';
import {} from "../controllers/reservation.js"; 


const router = express.Router();
router.post("/send", sendReservation);

export default router;