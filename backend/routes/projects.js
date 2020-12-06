import Router from 'express-promise-router'

import { Project, User } from '../models/index.js'

const router = new Router()

router.get('/', async (req, res) => {
  try {
    const projects = await Project.findAll()
    res.status(200).json(projects)
  } catch (e) {
    console.error('Error:', e.message)
    res.status(404).json({ error: e.message })
  }
})

router.post('/', async (req, res) => {
  try {
    const project = await User.create({
      sub: req.body.sub,
      email: req.body.email,
    })
    console.log(`user ${req.body.email} registered`)
    res.status(200).json(project)
  } catch (e) {
    console.error('Error:', e.message)
  }
})

export default router
