import mongoose from "mongoose"

const about = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  mission: {
    type: [String]
  }
}, { timestamps: true })

export default mongoose.model("about", about)