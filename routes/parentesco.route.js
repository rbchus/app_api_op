import { Router } from "express";
import { deleteParentesco, get_x_acudiente, get_x_nino, setParentesco } from "../models/parentesco.models.js";


const router = Router();

router.post("/api/parentesco/", setParentesco);
router.delete("/api/parentesco/:id", deleteParentesco);
router.get("/api/parentesco/a/:id", get_x_acudiente);
router.get("/api/parentesco/n/:id", get_x_nino);






export default router;