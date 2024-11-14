import { Router } from "express";
import { pool } from "../db.js";
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from "../config.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const correo_usuario = req.body.correo_usuario;
    const clave_usuario = req.body.clave_usuario;
    
    // Intentar una consulta para verificar la conexión a la base de datos
    const [rows] = await pool.query(
      "SELECT * FROM usuarios_x_rol WHERE correo_usuario = ? AND clave_usuario = ?",
      [correo_usuario, clave_usuario]
    );

    if (rows.length > 0) {
      const token = jwt.sign({ id: correo_usuario }, SECRET_KEY, {
        expiresIn: 86400 // 24 horas
      });

      return res.status(200).json({
        auth: true,
        message: "Usuario logeado con éxito",
        data: token
      });
    } else {
      return res.status(401).json({
        status: false,
        message: "Error de usuario o contraseña",
        data: []
      });
    }

  } catch (error) {
    // Detectar si el error es de conexión a la base de datos
    if (error.code === 'ECONNREFUSED') {
      return res.status(500).json({ message: "Error: No se pudo conectar a la base de datos" });
    } else {
      return res.status(500).json({ message: "Error en la consulta: " + error.message });
    }
  }
});

export default router;
