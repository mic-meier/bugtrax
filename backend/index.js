import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import jwt from 'express-jwt'
import jwks from 'jwks-rsa'

import mountRoutes from './routes/index.js'
const app = express()

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: process.env.JWKS_URI,
  }),
  audience: process.env.API_AUDIENCE,
  issuer: process.env.API_ISSUER,
  algorithms: ['RS256'],
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(jwtCheck)

mountRoutes(app)

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server listening`)
})
