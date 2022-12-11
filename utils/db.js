import mongoose from 'mongoose'
import 'dotenv/config'

const database = async () => {
    return await mongoose.connect(process.env.MONGO_DB)
        .then((res) => console.log('connection success : ', res.options.autoIndex))
        .catch(err => console.log('connection failed : ', err))
}

export default database;
