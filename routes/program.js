import express from "express";
import multer from "multer"
import { getProgram, postProgram, getProgramsByCategory, deleteProgram, getPrograms, deleteAll } from "../controllers/program.js";
const upload = multer({ dest: './uploads/programs' })

export const programRoute = express.Router();

programRoute.post("/post/program", upload.single("avatar"), postProgram);
programRoute.get("/get/programs", getPrograms)
programRoute.get("/get/program/?", getProgram)
programRoute.get("/get/programs/:category", getProgramsByCategory)
programRoute.delete("/delete/program/:id", deleteProgram)
programRoute.delete("/delete/all", deleteAll)