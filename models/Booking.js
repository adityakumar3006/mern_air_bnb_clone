const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    place: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Place' },
    checkIn: { type: Date, required: true },
    checkOut: { type: Date, required: true },
    // numberOfGuests: { type },
    name: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, required: true },

    phone: { type: String, required: true },
    price: Number,
})

const BookingModel = mongoose.model("Booking", bookingSchema);

module.exports = BookingModel;