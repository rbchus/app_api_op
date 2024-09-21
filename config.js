import { config } from "dotenv";
config()
export const PORT = process.env.PORT || 3001;
export const DB_HOST = process.env.DB_HOST || "junction.proxy.rlwy.net";
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASSWORD = process.env.DB_PASSWORD || "UmWrXOdNqzelABEXlKJenWxspbAebEUA";
export const DB_DATABASE = process.env.DB_DATABASE || "railway";
export const DB_PORT = process.env.DB_PORT || 14030;
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