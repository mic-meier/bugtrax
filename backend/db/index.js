import dotenv from 'dotenv'
dotenv.config()
import pkg from 'pg'
const { Pool } = pkg

const isProd = process.env.NODE_ENV === 'production'

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

const pool = new Pool({
  connectionString: isProd ? process.env.DATABASE_URL : connectionString,
  ssl: isProd,
})

async function query(text, params, callback) {
  return pool.query(text, params, callback)
}

export default { pool, query }
