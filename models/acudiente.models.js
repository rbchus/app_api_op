import { pool } from "../db.js";


export const getAllAcudientes = async (req, res) => {
  try {
       const [rows] = await pool.query(
      "SELECT * FROM acudientes"
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


export const getAcudiente = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query(
      "SELECT * FROM acudientes WHERE cedula = ? ",
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

export const setAcudiente = async (req, res) => {
  try {
    const cedula  = req.body.cedula;
    const nombre  = req.body.nombre;
    const apellido  =  req.body.apellido;
    const correo  =  req.body.correo;
    const celular =  req.body.celular;
    const direccion  = req.body.direccion;
    
    const rta = await pool.query(
      "insert into acudientes (cedula,nombre,apellido,correo,celular,direccion, fecha_registro ) values (?,?,?,?,?,?,NOW())",
      [cedula , nombre , apellido , correo , celular , direccion ]
    );
    console.log (" rta " + JSON.stringify(rta))
    if (rta[0].affectedRows == 1) {
      return res.status(200).json({ status: true,  datos:[] , message: "acudiente  creado con exito"  });
    } else  {
      return res.status(400).json({ status: false,  datos:[] , message: "  error al crear el acudiente "  });
    }


  } catch (error) {
    return res.status(500).json({ status: false,  datos:[] , message: "  error servidor "  });
  }
};

export const updateAcudiente = async (req, res) => {
  try {

    const { id } = req.params;
    const nombre  = req.body.nombre;
    const apellido  =  req.body.apellido;
    const correo  =  req.body.correo;
    const celular =  req.body.celular;
    const direccion  = req.body.direccion;

  
    const [rta] = await pool.query(
      "update acudientes set nombre = ? , apellido = ? , correo = ? , celular = ? , direccion = ?  where cedula = ?",
      [nombre , apellido , correo , celular , direccion , id]
    );

   
    if (rta[0].changedRows == 1) {
      return res.status(200).json({ status: true,  message: "acudiente actualiado correctamente" });
    } else  {
      return res.status(200).json({ status: false,  message: " error en la actualizar el acuediente" });
    }

  } catch (error) {
    return res.status(500).json({ status: false,  datos:[] , message: "  error servidor "  });
  }
};


export const deleteAcudiente = async (req, res) => {
  try {

    const { id } = req.params;
  
    const [rta] = await pool.query(
      "delete from acudientes  where cedula = ?",
      [id]
    );
   
    if (rta[0].affectedRows == 1) {
      return res.status(200).json({ status: true,  datos:[] , message: "acudiente borrado con exito"  });
    } else  {
      return res.status(400).json({ status: false,  datos:[] , message: "  error al borrar el acudiente "  });
    }


   

  } catch (error) {
    return res.status(500).json({ status: false,  datos:[] , message: "  error servidor "  });
  }
};



