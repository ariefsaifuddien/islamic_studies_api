import mongoose from 'mongoose'
import 'dotenv/config'

const database = async () => {
  mongoose.set('strictQuery', false)
  return await mongoose.connect(process.env.MONGO)
    .then((res) => console.log('DB Connection success : ', res.options.autoIndex))
    .catch(_ => console.error('DB Connection failed!'))
}

export default database
