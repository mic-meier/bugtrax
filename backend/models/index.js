import Project from './project.js'
import User from './user.js'

User.hasMany(Project)
Project.belongsTo(User)

export { Project, User }
