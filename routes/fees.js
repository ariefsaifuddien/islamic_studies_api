import express from "express";
import { postFees, getFees } from "../controllers/fees.js"

export const feeRoute = express.Router()

feeRoute.post("/post/fee", postFees);
feeRoute.get("/get/fee", getFees);