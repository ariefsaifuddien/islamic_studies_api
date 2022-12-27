import mongoose from "mongoose";

const fee = new mongoose.Schema({
    conditions: {
        type: [String],
        required: true
    },
    pounds: {
        type: Number
    },
    dollars: {
        type: Number
    }
})

export default mongoose.model("fees", fee);