import prot from './protected.js'

const mountRoutes = (app) => {
  app.use('/protected', prot)
}

export default mountRoutes
