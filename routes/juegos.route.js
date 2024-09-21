import { Router } from "express";
import auth from "../middleware/auth.js";
import { deleteJuego, getAllJuegos, setJuego, updateJuego } from "../models/juegos.models.js";


const router = Router();
router.get("/api/juego/:fecha" , auth, getAllJuegos);
router.post("/api/juego/", auth, setJuego);
router.put("/api/juego/:id", auth,updateJuego);
router.delete("/api/juego/:id", auth,deleteJuego);
router.post("/api/juegosxnino/",auth, getAllJuegos);



export default router;