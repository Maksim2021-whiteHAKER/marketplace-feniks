// lib/db.ts
import mysql, { RowDataPacket, OkPacket } from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Типы результатов
type QueryResult<T = any> = T extends RowDataPacket[] ? T : OkPacket;

export async function query<T = any>(
  sql: string, 
  values?: any[]
): Promise<QueryResult<T>> {
  const connection = await pool.getConnection();
  try {
    const [results] = await connection.query<QueryResult<T>>(sql, values);
    return results;
  } finally {
    connection.release();
  }
}