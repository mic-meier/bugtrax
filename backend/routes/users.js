import Router from 'express-promise-router'

import { User } from '../models/index.js'

const router = new Router()

router.get('/:sub', async (req, res) => {
  const sub = req.params.sub
  console.log('sub', sub)
  try {
    const user = await User.findOne({
      where: {
        sub: sub,
      },
    })
    res.status(200).json(user)
  } catch (e) {
    console.error('Error:', e.message)
    res.status(404).json({ error: e.message })
  }
})

router.post('/', async (req, res) => {
  try {
    const user = await User.create({
      sub: req.body.sub,
      email: req.body.email,
    })
    console.log(`user ${req.body.email} registered`)
    res.status(200).json(user)
  } catch (e) {
    console.error('Error:', e.message)
  }
})

export default router
