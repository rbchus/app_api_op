import { Router } from "express";
//import auth from '../middleware/auth.js';
import { deleteJuego, getAllJuegos, setJuego, updateJuego } from "../models/juegos.models.js";


const router = Router();
router.get("/api/juego/:fecha" , getAllJuegos);
router.post("/api/juego/", setJuego);
router.put("/api/juego/:id", updateJuego);
router.delete("/api/juego/:id", deleteJuego);
router.post("/api/juegosxnino/",   getAllJuegos);



export default router;