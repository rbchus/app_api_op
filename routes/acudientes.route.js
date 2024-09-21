import { Router } from "express";
import auth from "../middleware/auth.js";
import { deleteAcudiente, getAcudiente, getAllAcudientes, setAcudiente, updateAcudiente } from "../models/acudiente.models.js";

const router = Router();

router.get("/api/acudiente/", auth, getAllAcudientes);
router.get("/api/acudiente/:id", getAcudiente);
router.post("/api/acudiente/", setAcudiente);
router.put("/api/acudiente/:id", updateAcudiente);
router.delete("/api/acudiente/:id", deleteAcudiente);



export default router;