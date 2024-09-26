import { pool } from "../db.js";

// Función para manejar respuestas de éxito
const handleSuccess = (res, data, message) => {
  return res.status(200).json({
    status: true,
    datos: data,
    message: message
  });
};

// Función para manejar respuestas de error
const handleError = (res, errorMessage, errorData = []) => {
  return res.status(500).json({
    status: false,
    datos: errorData,
    message: errorMessage
  });
};

export const getAllNinos = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM ninos ORDER BY fecha_registro DESC");

    if (rows.length > 0) {
      return handleSuccess(res, rows, "Consulta exitosa");
    } else {
      return handleSuccess(res, [], "Consulta vacía");
    }
  } catch (error) {
    return handleError(res, "Error en el servidor");
  }
};

export const getNino = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM ninos WHERE id_nino = ?", [id]);

    if (rows.length > 0) {
      return handleSuccess(res, rows, "Consulta exitosa");
    } else {
      return handleSuccess(res, [], "Consulta vacía");
    }
  } catch (error) {
    return handleError(res, "Error en el servidor");
  }
};

export const setNino = async (req, res) => {
  try {
    const { nombre, apellido, genero, celular, nacimiento } = req.body;

    const [rta] = await pool.query(
      "INSERT INTO ninos (nombre, apellido, genero, celular, nacimiento, fecha_registro) VALUES (?, ?, ?, ?, ?, NOW())",
      [nombre, apellido, genero, celular, nacimiento]
    );

    if (rta.affectedRows === 1) {
      return handleSuccess(res, [], "Niño creado con éxito");
    } else {
      return res.status(400).json({
        status: false,
        datos: [],
        message: "Error al crear el niño"
      });
    }
  } catch (error) {
    return handleError(res, "Error en el servidor");
  }
};

export const updateNino = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, apellido, genero, celular, nacimiento } = req.body;

    const [rta] = await pool.query(
      "UPDATE ninos SET nombre = ?, apellido = ?, genero = ?, celular = ?, nacimiento = ? WHERE id_nino = ?",
      [nombre, apellido, genero, celular, nacimiento, id]
    );

    if (rta.changedRows === 1) {
      return handleSuccess(res, [], "Niño actualizado correctamente");
    } else {
      return res.status(400).json({
        status: false,
        message: "Error al actualizar el niño"
      });
    }
  } catch (error) {
    return handleError(res, "Error en el servidor");
  }
};

export const deleteNino = async (req, res) => {
  try {
    const { id } = req.params;

    const [rta] = await pool.query("DELETE FROM ninos WHERE id_nino = ?", [id]);

    if (rta.affectedRows === 1) {
      return handleSuccess(res, [], "Niño borrado con éxito");
    } else {
      return res.status(400).json({
        status: false,
        datos: [],
        message: "Error al borrar el niño"
      });
    }
  } catch (error) {
    return handleError(res, "Error en el servidor");
  }
};
