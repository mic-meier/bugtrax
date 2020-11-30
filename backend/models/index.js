import pkg from 'sequelize'
const { DataTypes } = pkg

import sequelize from '../db/index.js'

const User = sequelize.define(
  'User',
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fullName: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.firstName} ${this.lastName}`
      },
      set(value) {
        throw new Error('Do not try to set the `fullName` value!')
      },
    },
  },
  {
    // other model options
  }
)

console.log(User == sequelize.models.User)

await User.sync()

const user = await User.create({ firstName: 'Bruce', lastName: 'Wayne' })
console.log(user.fullName)

await User.drop()
