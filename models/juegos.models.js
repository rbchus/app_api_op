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

export const getAllJuegos = async (req, res) => {
  try {
    const { fecha } = req.params;
    const [rows] = await pool.query(
      "SELECT * FROM juegos_x_ninos WHERE fecha_registro > ? ORDER BY fecha_registro DESC",
      [fecha]
    );

    if (rows.length > 0) {
      return handleSuccess(res, rows, "Consulta exitosa");
    } else {
      return handleSuccess(res, [], "Consulta vacía");
    }
  } catch (error) {
    return handleError(res, "Error en el servidor: " + error);
  }
};

export const setJuego = async (req, res) => {
  try {
    const { id_nino, id_zona, id_tiempo } = req.body;

    const rta = await pool.query(
      "INSERT INTO juegos (id_nino, id_zona, id_tiempo, estado, tiempo_inicial, tiempo_final, fecha_registro) VALUES (?, ?, ?, 0, '00:00:00', '00:00:00', NOW())",
      [id_nino, id_zona, id_tiempo]
    );

    if (rta[0].affectedRows === 1) {
      return handleSuccess(res, [], "Juego creado con éxito");
    } else {
      return res.status(400).json({
        status: false,
        datos: [],
        message: "Error al crear el juego"
      });
    }
  } catch (error) {
    return handleError(res, "Error en el servidor: " + error);
  }
};

export const updateJuego = async (req, res) => {
  try {
    const { id } = req.params;
    const { estado, tiempo_inicial, tiempo_final } = req.body;

    const [rta] = await pool.query(
      "UPDATE juegos SET estado = ?, tiempo_inicial = ?, tiempo_final = ? WHERE id_juego = ?",
      [estado, tiempo_inicial, tiempo_final, id]
    );

    if (rta[0].changedRows === 1) {
      return handleSuccess(res, [], "Juego actualizado correctamente");
    } else {
      return res.status(400).json({
        status: false,
        message: "Error al actualizar el juego"
      });
    }
  } catch (error) {
    return handleError(res, "Error en el servidor: " + error);
  }
};

export const deleteJuego = async (req, res) => {
  try {
    const { id } = req.params;

    const [rta] = await pool.query(
      "DELETE FROM juegos WHERE id_juego = ?",
      [id]
    );

    if (rta[0].affectedRows === 1) {
      return handleSuccess(res, [], "Juego borrado con éxito");
    } else {
      return res.status(400).json({
        status: false,
        datos: [],
        message: "Error al borrar el juego"
      });
    }
  } catch (error) {
    return handleError(res, "Error en el servidor: " + error);
  }
};
