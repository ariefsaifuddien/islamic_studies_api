import mongoose from 'mongoose'

const visit = mongoose.Schema({
  count: {
    type: Number,
    required: true
  }
}, { timestamps: true })

export default mongoose.model('visit', visit)