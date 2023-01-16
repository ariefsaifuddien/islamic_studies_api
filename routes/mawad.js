import express from "express"
import { postMawad, getMawad, deleteMawad } from "../controllers/mawad.js"

export const mawadRoute = express.Router()

mawadRoute.post("/", postMawad)
mawadRoute.get("/", getMawad)
mawadRoute.delete("/:id", deleteMawad)