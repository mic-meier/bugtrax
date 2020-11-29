import express from 'express'
const app = express()

app.get('/', (req, res) => {
  res.json({ content: 'Hello World' })
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
