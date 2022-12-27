import express from "express"
import { deleteAds, getAds, getOneAds, postAds } from "../controllers/ads.js";

export const adsRoute = express.Router()

adsRoute.post("/post/ads", postAds);
adsRoute.get("/get/ads", getAds);
adsRoute.get("/get/ads/?", getOneAds);
adsRoute.delete("/delete/ads/:id", deleteAds)
