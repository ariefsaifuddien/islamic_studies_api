import express from "express";
import { postHaikah, getHaikah, deleteHaikah } from "../controllers/haikah.js"

export const haikalRoute = express.Router()

haikalRoute.post("/post/haikal", postHaikah);
haikalRoute.get("/get/haikal", getHaikah);
haikalRoute.delete("/delete/haikal/:id", deleteHaikah);