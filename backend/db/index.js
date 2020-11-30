import dotenv from 'dotenv'
dotenv.config()
import { Sequelize } from 'sequelize'

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

const sequelize = new Sequelize(connectionString)

try {
  await sequelize.authenticate()
  console.log('Connected to DB')
} catch (e) {
  console.error('Unable to connect to DB', e)
}

export default sequelize
