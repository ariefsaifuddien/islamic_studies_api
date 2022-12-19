import mongoose from "mongoose";

const ads = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String
    },
    picExt: {
        type: String
    }
})

export default mongoose.model("ads", ads);