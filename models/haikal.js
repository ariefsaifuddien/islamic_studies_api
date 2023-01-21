import mongoose from "mongoose"

const haikal = new mongoose.Schema({
  category: {
    type: Number,
    required: true
  },
  position: {
    type: String
  },
  description: {
    type: String,
    required: true
  },
  works: {
    type: [String]
  }
}, { timestamps: true })

export default mongoose.model("haikal", haikal)