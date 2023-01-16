import express from "express"
import { postHaikal, getHaikal, deleteHaikal } from "../controllers/haikal.js"

export const haikalRoute = express.Router()

haikalRoute.post("/", postHaikal)
haikalRoute.get("/", getHaikal)
haikalRoute.delete("/:id", deleteHaikal)