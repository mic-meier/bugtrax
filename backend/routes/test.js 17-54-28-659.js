import Router from 'express-promise-router'

import db from '../db/index.js'

const router = new Router()

router.get('/', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM bug')
    res.status(200).json(rows)
  } catch (e) {
    console.error('Error:', e.message)
    res.status(404).json({ error: e.message })
  }
})

export default router
