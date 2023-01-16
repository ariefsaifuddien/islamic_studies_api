import 'dotenv/config'
import cors from "cors"
import express from "express"
import db from "./utils/db.js"
import { adminRouter } from './routes/admin.js'
import { visitRouter } from './routes/visit.js'
import { feeRoute } from './routes/fees.js'
import { haikalRoute } from './routes/haikal.js'
import { aboutRoute } from './routes/about.js'
import { tasjeelRoute } from './routes/tasjeel.js'
import { mawadRoute } from './routes/mawad.js'

const app = express()
const port = process.env.PORT || 3300

db()
app.use(cors())
app.use(express.json())

app.use("/api/admin", adminRouter)
app.use("/api/visit", visitRouter)
app.use("/api/fees", feeRoute)
app.use("/api/haikal", haikalRoute)
app.use("/api/about", aboutRoute)
app.use("/api/tasjeel", tasjeelRoute)
app.use("/api/studies", mawadRoute)

app.use('/', (_, res) => {
  res.status(404).json({
    code: 404,
    message: 'Page Not Found',
  })
})

app.listen(port, () => console.log(`Server running on http://localhost:${port}`))