import { postLecturer, getLecturers, getLecturersBySpecialization, getLecturer, deleteLecturer, deleteAll } from "../controllers/lecturer.js";
import express from "express";
import multer from "multer"
const upload = multer({ dest: './uploads/lecturers' })

export const lecturerRoute = express.Router();

lecturerRoute.post("/post/lecturer", upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'file', maxCount: 1 }]), postLecturer);
lecturerRoute.get("/get/lecturers", getLecturers);
lecturerRoute.get("/get/lecturer/?", getLecturer);
lecturerRoute.get("/get/lecturers/:spec", getLecturersBySpecialization);
lecturerRoute.delete("/delete/lecturer/:id", deleteLecturer)
lecturerRoute.delete("/delete/all", deleteAll)

