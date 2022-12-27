import express from "express";
import { getFileForLecturer, getImageForLecturer } from "../controllers/download.js";
export const downloadRoute = express.Router();

downloadRoute.get("/download/image/lecturer/:path", getImageForLecturer);
downloadRoute.get("/download/file/lecturer/:path", getFileForLecturer);