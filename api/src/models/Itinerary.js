import mongoose from 'mongoose';


const itinerarySchema = new mongoose.Schema(
{
userEmail: { type: String, required: true, index: true },
title: { type: String, required: true },
items: [
{ day: Number, note: String, countryCode: String, date: Date }
]
},
{ timestamps: true }
);


export default mongoose.model('Itinerary', itinerarySchema);