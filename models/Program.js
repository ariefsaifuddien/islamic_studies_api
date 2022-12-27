import mongoose from "mongoose";

const program = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    details: {
        type: String
    },
    date: {
        type: Date
    },
    category: {
        type: String
    },
    picExt: {
        type: String
    }
})

export default mongoose.model("programs", program);