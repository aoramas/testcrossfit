const express = require("express");
const {
    getBookings,
    getBookingsById,
    createBookings,
    updateBookings,
    deleteBookings,
} = require("../services/booking.service");

const router = express.Router();

router.get("/", getBookings);
router.get("/:id", getBookingsById);
router.post("/", createBookings);
router.put("/:id", updateBookings);
router.delete("/:id", deleteBookings);

module.exports = router;