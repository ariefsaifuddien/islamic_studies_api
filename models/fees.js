import mongoose from "mongoose"

const fees = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  pound: {
    type: Number
  },
  dollar: {
    type: Number
  }
}, { timestamps: true })

export default mongoose.model("fees", fees)
