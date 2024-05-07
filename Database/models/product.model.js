import mongoose from "mongoose";

const schema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
        unique: true,
        minLength: [2, "companyName is too short"],
    },
    Price: {
        type: Number,
        required: true,
    },
    Model: {
        type: String,
        required: true,
        minLength: [2, "companyName is too short"],
    },
    Description: {
        type: String,
        required: true,
        minLength: [25, "description is too short"]
    },

}, { timestamps: true })


export const productModel = mongoose.model("product", schema)