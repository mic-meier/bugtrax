import pkg from 'sequelize'
const { DataTypes } = pkg
import sequelize from '../db/index.js'

const User = sequelize.define('User', {
  sub: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

export default User
