import mysql from "mysql2";
import { config } from "./config.js";

export const connection = mysql.createConnection(config);
