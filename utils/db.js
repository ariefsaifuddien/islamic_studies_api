import mongoose from 'mongoose'
import 'dotenv/config'

const database = async () => {
  mongoose.set('strictQuery', true)
  return await mongoose.connect(process.env.MONGO)
    .then((res) => console.log('DB Connection success : ', res.options.autoIndex))
    .catch(err => console.error('DB Connection failed!'))
}

export default database
