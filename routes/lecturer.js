import { postLecturer, getLecturers, getLecturersBySpecialization, updateLecturer, getLecturer } from "../controllers/lecturer.js";
import express from "express";

export const lecturerRoute = express.Router();

lecturerRoute.post("/post/lecturer", postLecturer);
lecturerRoute.get("/get/lecturers", getLecturers);
lecturerRoute.get("/get/lecturer/:id", getLecturer);
lecturerRoute.get("/get/lecturers/:spec", getLecturersBySpecialization);
lecturerRoute.patch("/patch/lecturer", updateLecturer);

