console.log ("Ocaña Park :)")

import bodyParser from 'body-parser';


import {
    PORT,
} from "./config.js";

import cors from "cors";
import express from "express";

import acudienteRoutes from './routes/acudientes.route.js';
import auth from './routes/auth.js';
import usuarioJuegos from './routes/juegos.route.js';
import ninoRoutes from './routes/ninos.route.js';
import parentescoRoutes from './routes/parentesco.route.js';
import usuarioRoutes from './routes/usuarios.route.js';


const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(usuarioRoutes)
app.use(acudienteRoutes)
app.use(ninoRoutes)
app.use(parentescoRoutes)
app.use(usuarioJuegos)
app.use("/api/auth/",auth); 

app.listen(PORT);
console.log(".... corriendo por puerto " + PORT);
