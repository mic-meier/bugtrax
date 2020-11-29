import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'

import mountRoutes from './routes/index.js'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

mountRoutes(app)

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server listening`)
})
