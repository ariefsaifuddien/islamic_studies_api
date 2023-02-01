import mongoose from "mongoose"

const tasjeel = new mongoose.Schema({
  sharat: {
    type: String
  },
  category: {
    type: String,
    required: true
  }
}, { timestamps: true })

export default mongoose.model("tasjeel", tasjeel)