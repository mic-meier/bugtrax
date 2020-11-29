import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'

import db from './db/index.js'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res, next) => {
  db.query('SELECT * FROM test', null, (err, result) => {
    if (err) {
      return next(err)
    }
    res.send(result.rows)
  })
})

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server listening`)
})
