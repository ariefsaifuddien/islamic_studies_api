import express from "express"
import { postFees, getFees, delFee } from "../controllers/fees.js"

export const feeRoute = express.Router()

feeRoute.post("/", postFees)
feeRoute.get("/", getFees)
feeRoute.delete("/:id", delFee)