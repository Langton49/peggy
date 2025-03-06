import pkg from "pg";
const { Pool } = pkg;
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,  
    require: true,               
  },
});

pool.connect()
  .then(() => console.log("Connected to Supabase PostgreSQL"))
  .catch(err => console.error("Database connection failed", err));

export default pool;
