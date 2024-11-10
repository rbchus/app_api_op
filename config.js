import { config } from "dotenv";
config()
export const PORT = process.env.PORT || 3001;
export const DB_HOST = process.env.DB_HOST || "127.0.0.1";
export const DB_USER = process.env.DB_USER || "u218113810_OcanaPark";
export const DB_PASSWORD = process.env.DB_PASSWORD || "OcanaP4rk&24";
export const DB_DATABASE = process.env.DB_DATABASE || "u218113810_OcanaPark";
export const DB_PORT = process.env.DB_PORT || 3306;
export const SECRET_KEY = process.env.SECRET_KEY || "papichulo";

/*
export const PORT = process.env.PORT || 3001;
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASSWORD = process.env.DB_PASSWORD || "";
export const DB_DATABASE = process.env.DB_DATABASE || "ocanapark";
export const DB_PORT = process.env.DB_PORT || 3306;
export const SECRET_KEY = process.env.SECRET_KEY || "papichulo";
*/
