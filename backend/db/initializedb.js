import { Project, User } from '../models/index.js'
import sequelize from './index.js'

await sequelize.drop({ force: true })

await User.hasMany(Project)
await Project.belongsTo(User)

await sequelize.sync({ force: true })
