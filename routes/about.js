import express from "express"
import { postAbout, getAbout, deleteAbout } from "../controllers/about.js"

export const aboutRoute = express.Router()

aboutRoute.post("/", postAbout)
aboutRoute.get("/", getAbout)
aboutRoute.delete("/:id", deleteAbout)