import { pool } from "../db.js";


export const setParentesco = async (req, res) => {
  try {
   
    const id_nino  = req.body.id_nino;
    const cedula  =  req.body.cedula;
    const id_parentesco  =  req.body.id_parentesco;
    
    const rta = await pool.query(
      "insert into nino_x_acudiente (id_nino,cedula,id_parentesco, fecha_registro ) values (?,?,?,NOW())",
      [id_nino , cedula , id_parentesco ]
    );

    if (rta[0].affectedRows == 1) {
      return res.status(200).json({ status: true,  datos:[] , message: "parentesxo  creado con exito"  });
    } else  {
      return res.status(400).json({ status: false,  datos:[] , message: "  error al crear el parentesco "  });
    }


  } catch (error) {
    return res.status(500).json({ status: false,  datos:[] , message: "  error servidor "  });
  }
};




export const deleteParentesco = async (req, res) => {
  try {

    const { id } = req.params;
  
    const [rta] = await pool.query(
      "delete from nino_x_acudiente  where id_na = ?",
      [id]
    );
   
    if (rta[0].affectedRows == 1) {
      return res.status(200).json({ status: true,  datos:[] , message: "parentesco borrado con exito"  });
    } else  {
      return res.status(400).json({ status: false,  datos:[] , message: "  error al borrar el parentesco "  });
    }


   

  } catch (error) {
    return res.status(500).json({ status: false,  datos:[] , message: "  error servidor "  });
  }
};


export const get_x_acudiente = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query(
      "SELECT * FROM suscriptores WHERE cedula_acudiente =  ? ",
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

export const get_x_nino = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query(
      "SELECT * FROM suscriptores WHERE id_nino =  ? ",
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


