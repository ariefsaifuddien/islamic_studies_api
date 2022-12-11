import mongoose from "mongoose";

const about = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    visions: {
        type: [String]
    },
    mission: {
        type: [String]
    },
    values: {
        type: [String]
    }
})

export default mongoose.model("about", about);