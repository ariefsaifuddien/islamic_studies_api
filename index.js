import 'dotenv/config'
import cors from "cors"
import express from "express"
import db from "./utils/db.js"
import { lecturerRoute } from './routes/lecturer.js'
import { programRoute } from './routes/program.js'
import { downloadRoute } from './routes/download.js'

const app = express()
const port = process.env.PORT || 3300

db();
app.use(cors())
app.use(express.json())
app.use("/api", lecturerRoute)
app.use("/api", programRoute)
app.use("/api", downloadRoute)

app.use('/', (req, res) => {
    res.status(404).json({
        code: 404,
        message: 'Page Not Found',
    })
})

app.listen(port, () => console.log(`Server running on http://localhost:${port}`))

