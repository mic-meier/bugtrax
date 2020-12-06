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
  const { body } = req
  try {
    const user = await User.findOne({
      where: {
        sub: body.sub,
      },
    })

    const project = await user.createProject({
      name: body.name,
      key: body.key,
      description: body.description,
    })

    res.status(200).json(project)
  } catch (e) {
    console.error('Error:', e.message)
    res.status(403).json({ Error: e.message })
  }
})

export default router
