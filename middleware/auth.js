// modulos de node

import jwt from 'jsonwebtoken';

import { Router } from "express";
const router = Router();

import {
    SECRET_KEY,
} from "../config.js";
  

// crear la funcion meddleware

  
export default function auth(req, res, next) {
    
    const authHeader = req.headers.authorization;
    const token = authHeader.split(' ')[1];
    //console.log (" authHeader " + JSON.stringify(authHeader))
    
    if (!token) {
        return res.status(403).json({ auth: false, message: 'No se proporcionó token. -- ' + token });
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(400).json({ auth: false, message: 'Fallo en la autenticación del token.' });
        }

        req.userId = decoded.id;
        next();
    });
}



