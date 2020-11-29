import test from './test.js'

const mountRoutes = (app) => {
  app.use('/test', test)
}

export default mountRoutes
