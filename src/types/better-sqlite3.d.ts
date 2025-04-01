import Database from 'better-sqlite3';

declare module 'better-sqlite3' {
  interface Database {
    prepare(sql: string): Database.Statement;
  }
}