import { Router } from "express";
import auth from "../middleware/auth.js";
import { getAllUsers, getLogin, getUser } from "../models/usuarios.model.js";


const router = Router();

router.get("/api/usuario/", auth , getAllUsers);
router.get("/api/usuario/:id", getUser);
router.post("/api/usuario/", getLogin);



export default router;