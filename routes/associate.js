import express from "express";
import multer from "multer"
import { postAssociate, getAssociates, deleteAssociate, getAssociate } from "../controllers/associate.js";
const upload = multer({ dest: './uploads/faculties' })

export const associateRoute = express.Router();

associateRoute.post("/post/associate", upload.single("avatar"), postAssociate);
associateRoute.get("/get/associates", getAssociates);
associateRoute.get("/get/associate/?id", getAssociate);
associateRoute.delete("/delete/associate/:id", deleteAssociate);