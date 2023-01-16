import mongoose from "mongoose"

const mawad = new mongoose.Schema({
  program: {
    type: String,
    required: true
  },
  class: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  madah: {
    type: String
  }
}, { timestamps: true })

export default mongoose.model("mawad", mawad)