import express from "express";
import { postAbout, getAbout } from "../controllers/about.js"

export const aboutRoute = express.Router()

aboutRoute.post("/post/about", postAbout)
aboutRoute.get("/get/about", getAbout);