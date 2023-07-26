const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Type.ObjectId, ref: "User" },
    title: String,
    adreess: String,
    photos: [String],
    description: String,
    perks: [String],
    etrainfo: String,
    checkIn: Number,
    checkOut: Number,
    maxGuests:Number,
})

const PlaceModel = mongoose.model("Place", placeSchema)
module.exports=PlaceModel