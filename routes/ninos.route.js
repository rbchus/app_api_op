import { Router } from "express";
import auth from "../middleware/auth.js";
import { deleteNino, getAllNinos, getNino, setNino, updateNino } from "../models/nino.models.js";


const router = Router();

router.get("/api/nino/",  auth, getAllNinos);
router.get("/api/nino/:id", auth,getNino);
router.post("/api/nino/", auth,setNino);
router.put("/api/nino/:id", auth,updateNino);
router.delete("/api/nino/:id", auth,deleteNino);



export default router;