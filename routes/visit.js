import express from "express"
import { addVisitor, getVisitor } from "../controllers/visit.js"

export const visitRouter = express.Router()

visitRouter.post('/', addVisitor)
visitRouter.get('/', getVisitor)
