import prot from './protected.js'
import users from './users.js'

const mountRoutes = (app) => {
  app.use('/protected', prot)
  app.use('/users', users)
}

export default mountRoutes
