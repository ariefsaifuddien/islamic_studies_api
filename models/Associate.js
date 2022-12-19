import mongoose from "mongoose";

const associate = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String
    },
    location: {
        type: String
    }
})

export default mongoose.model("associate_faculties", associate);