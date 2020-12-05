import Router from 'express-promise-router'

const router = new Router()

router.get('/', async (req, res) => {
  console.log('res', res)
  res.json({ message: 'ping' })
})

export default router
