import mongoose from "mongoose"

const tasjeel = new mongoose.Schema({
  sharat: {
    type: String
  },
  category: {
    type: String
  }
}, { timestamps: true })

export default mongoose.model("tasjeel", tasjeel)