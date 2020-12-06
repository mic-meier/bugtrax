import pkg from 'sequelize'
const { DataTypes } = pkg

import sequelize from '../db/index.js'

const Project = sequelize.define(
  'Project',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    key: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
    },
    comment: {
      type: DataTypes.TEXT,
    },
  },
  {
    // other model options
  }
)

export default Project
