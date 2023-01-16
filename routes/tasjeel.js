import express from "express"
import { postTasjeel, getTasjeel, deleteTasjeel } from "../controllers/tasjeel.js"

export const tasjeelRoute = express.Router()

tasjeelRoute.post("/", postTasjeel)
tasjeelRoute.get("/", getTasjeel)
tasjeelRoute.delete("/:id", deleteTasjeel)