import { pool } from "../db.js";


export const getAllJuegos = async (req, res) => {

  try {
    let { fecha } = req.params;
       
       const [rows] = await pool.query(
      "SELECT * FROM juegos_x_ninos where fecha_registro > ? order by fecha_registro desc",
      [fecha]
    );

    if (rows.length > 0) {
      return res.status(200).json({status: true,  datos:rows , message: "cosulta  exitosa" });
    } else  {
      return res.status(200).json({ status: false, datos: [] , message: "cosulta  vacia" });
    }


  } catch (error) {
    return res.status(500).json({ status: false,  datos:[] , message: "  error servidor " +   error  +  id });
  }
};

export const setJuego = async (req, res) => {
  try {
    const id_nino  = req.body.id_nino;
    const id_zona  = req.body.id_zona;
    const id_tiempo  =  req.body.id_tiempo;
    

    const rta = await pool.query(
      "insert into juegos (id_nino,id_zona, id_tiempo, estado, tiempo_inicial, tiempo_final,  fecha_registro ) values (?,?,?, 0, '00:00:00' , '00:00:00' ,NOW())",
      [id_nino , id_zona , id_tiempo ]
    );

    if (rta[0].affectedRows == 1) {
      return res.status(200).json({ status: true,  datos:[] , message: "juego  creado con exito"  });
    } else  {
      return res.status(400).json({ status: false,  datos:[] , message: "  error al crear el juego "  });
    }


  } catch (error) {
    return res.status(500).json({ status: false,  datos:[] , message: "  error servidor " + error  });
  }
};

export const updateJuego = async (req, res) => {
  try {

    const { id } = req.params;
    const estado  = req.body.estado;
    const tiempo_inicial  =  req.body.tiempo_inicial;
    const tiempo_final  =  req.body.tiempo_final;


  
    const [rta] = await pool.query(
      "update juegos set estado = ? , tiempo_inicial = ? , tiempo_final = ?   where id_juego = ?",
      [estado , tiempo_inicial , tiempo_final , id]
    );

   
    if (rta[0].changedRows == 1) {
      return res.status(200).json({ status: true,  message: "juego actualiado correctamente" });
    } else  {
      return res.status(200).json({ status: false,  message: " error al actualizar el juego " });
    }

  } catch (error) {
    return res.status(500).json({ status: false,  datos:[] , message: "  error servidor "  });
  }
};


export const deleteJuego = async (req, res) => {
  try {

    const { id } = req.params;
  
    const [rta] = await pool.query(
      "delete from juegos  where id_juego = ?",
      [id]
    );
   
    if (rta[0].affectedRows == 1) {
      return res.status(200).json({ status: true,  datos:[] , message: "juego borrado con exito"  });
    } else  {
      return res.status(400).json({ status: false,  datos:[] , message: "  error al borrar el juego "  });
    }


   

  } catch (error) {
    return res.status(500).json({ status: false,  datos:[] , message: "  error servidor "  });
  }
};



