import { Router } from "express";
//import auth from '../middleware/auth.js';
import { deleteNino, getAllNinos, getNino, setNino, updateNino } from "../models/nino.models.js";

const router = Router();

router.get("/api/nino/",  getAllNinos);
router.get("/api/nino/:id", getNino);
router.post("/api/nino/", setNino);
router.put("/api/nino/:id",  updateNino);
router.delete("/api/nino/:id",  deleteNino);



export default router;