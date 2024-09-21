import { pool } from "../db.js";





export const getAllUsers= async (req, res) => {
  try {
       const [rows] = await pool.query(
      "SELECT * FROM usuarios_x_rol"
    );

   
    if (rows.length > 0) {
      return res.status(200).json({status: true,  datos:rows , message: "cosulta  exitosa" });
    } else  {
      return res.status(200).json({ status: false, datos: [] , message: "cosulta  vacia" });
    }


  } catch (error) {
    return res.status(500).json({ status: false,  datos:[] , message: "  error servidor "  });
  }
};


export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query(
      "SELECT * FROM usuarios_x_rol WHERE id_usuario = ? ",
      [id]
    );

   
    if (rows.length > 0) {
      return res.status(200).json({status: true,  datos:rows , message: "cosulta  exitosa" });
    } else  {
      return res.status(200).json({ status: false, datos: [] , message: "cosulta  vacia" });
    }

  } catch (error) {
    return res.status(500).json({ status: false,  datos:[] , message: "  error servidor "  });
  }
};


export const getLogin = async (req, res) => {
  try {
    const correo_usuario = req.body.correo_usuario;
    const clave_usuario  = req.body.clave_usuario;
    
    const [rows] = await pool.query(
      "SELECT * FROM usuarios_x_rol WHERE correo_usuario = ? AND clave_usuario = ?",
      [correo_usuario , clave_usuario]
    );



      
      if (rows.length > 0) {
        return res.status(200).json({status: true,  datos:rows , message: "cosulta  exitosa" });
      } else  {
        return res.status(200).json({ status: false, datos: [] , message: "cosulta  vacia" });
      }

    
  } catch (error) {
    return res.status(500).json({ status: false,  datos:[] , message: "  error servidor "  });
  }
};

