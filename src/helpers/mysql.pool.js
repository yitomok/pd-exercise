import mysql from 'mysql';
import config from './configs/mysql';

export const pool = mysql.createPool(config);
