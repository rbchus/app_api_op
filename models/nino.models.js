import {
  pool
} from "../db.js";


export const getAllNinos = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM ninos order by fecha_registro desc"
    );

    if (rows.length > 0) {
      return res.status(200).json({
        status: true,
        datos: rows,
        message: "cosulta  exitosa"
      });
    } else {
      return res.status(200).json({
        status: false,
        datos: [],
        message: "cosulta  vacia"
      });
    }

  } catch (error) {
    return res.status(500).json({
      status: false,
      datos: [],
      message: "  error servidor "
    });
  }
};


export const getNino = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const [rows] = await pool.query(
      "SELECT * FROM ninos WHERE id_nino = ? ",
      [id]
    );


    if (rows.length > 0) {
      return res.status(200).json({
        status: true,
        datos: rows,
        message: "cosulta  exitosa"
      });
    } else {
      return res.status(200).json({
        status: false,
        datos: [],
        message: "cosulta  vacia"
      });
    }

  } catch (error) {
    return res.status(500).json({
      status: false,
      datos: [],
      message: "  error servidor "
    });
  }
};

export const setNino = async (req, res) => {
  try {

    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const genero = req.body.genero;
    const celular = req.body.celular;
    const nacimiento = req.body.nacimiento;


    const rta = await pool.query(
      "insert into ninos ( nombre,apellido,genero, celular ,nacimiento,fecha_registro ) values (?,?,?,?,?,NOW())",
      [nombre, apellido, genero, celular, nacimiento]
    );

    if (rta[0].affectedRows == 1) {
      return res.status(200).json({
        status: true,
        datos: [],
        message: "niño  creado con exito"
      });
    } else {
      return res.status(400).json({
        status: false,
        datos: [],
        message: "  error al crear el niño "
      });
    }


  } catch (error) {
    return res.status(500).json({
      status: false,
      datos: [],
      message: "  error servidor "
    });
  }
};

export const updateNino = async (req, res) => {



  try {

    const {
      id
    } = req.params;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const genero = req.body.genero;
    const celular = req.body.celular;
    const nacimiento = req.body.nacimiento;



    const [rta] = await pool.query(
      "update ninos set nombre = ? , apellido = ? , genero = ? , celular = ? , nacimiento = ?   where id_nino = ?",
      [nombre, apellido, genero, celular, nacimiento, id]
    );


    if (rta[0].changedRows == 1) {
      return res.status(200).json({
        status: true,
        message: "niño actualiado correctamente"
      });
    } else {
      return res.status(400).json({
        status: false,
        message: " error al actualizar el niño "
      });
    }

  } catch (error) {
    return res.status(200).json({
      status: false,
      datos: [],
      message: "  error servidor "
    });
  }
};


export const deleteNino = async (req, res) => {
  try {

    const {
      id
    } = req.params;

    const [rta] = await pool.query(
      "delete from ninos  where id_nino = ?",
      [id]
    );

    if (rta[0].affectedRows == 1) {
      return res.status(200).json({
        status: true,
        datos: [],
        message: "niño borrado con exito"
      });
    } else {
      return res.status(400).json({
        status: false,
        datos: [],
        message: "  error al borrar el niño "
      });
    }




  } catch (error) {
    return res.status(200).json({
      status: false,
      datos: [],
      message: "  error servidor "
    });
  }
};