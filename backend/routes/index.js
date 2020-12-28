import projects from './projects.js'
import users from './users.js'

const mountRoutes = (app) => {
  app.use('/users', users)
  app.use('/projects', projects)
}

export default mountRoutes
