export let connectionLimit = Number(process.env.MAX_CONN) || 10,
    host = process.env.DB_HOST || 'localhost',
    port = Number(process.env.DB_PORT) || 3306,
    user = process.env.DB_USER || 'root',
    password = process.env.DB_PASS,
    database = process.env.DB_NAME || 'pd',
    limit = Number(process.env.PAGE_LIMIT) || 100;

export default {
  connectionLimit, host, port, user, password, database
}
