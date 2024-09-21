import { Router } from "express";
import { pool } from "../db.js";
const router = Router();

import jwt from 'jsonwebtoken';


import {
  SECRET_KEY,
} from "../config.js";




router.post("/", async ( req, res) => {
  try {
    const correo_usuario = req.body.correo_usuario;
    const clave_usuario  = req.body.clave_usuario;
    
    const [rows] = await pool.query(
      "SELECT * FROM usuarios_x_rol WHERE correo_usuario = ? AND clave_usuario = ?",
      [correo_usuario , clave_usuario]
    );

    if (rows.length > 0) {

      const token = jwt.sign({ id: correo_usuario }, SECRET_KEY, {
        expiresIn: 86400 // 24 horas
    });

      return res.status(200).json(
        { auth: true ,
          message: "Usuario logeado con existo" ,
          data:token
        });
    } else  {
      return res.status(401).json(
        { status: false ,
          message: "Error de usuario o contraseña" ,
          data:[]
        });
    }
    
  } catch (error) {
    return res.status(500).json({ message: "Error en la consulta" + error});
  }



})

// Exports

export default router;
