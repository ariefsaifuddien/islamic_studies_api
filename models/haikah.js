import mongoose from "mongoose";

const haikah = new mongoose.Schema({
    pos: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    work: {
        type: String
    },
    details: {
        type: [String]
    }
})

export default mongoose.model("haikahs", haikah);