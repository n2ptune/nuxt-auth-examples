const express = require('express')

const app = express()

app.use(express.json())
app.use((req, res, next) => {
  console.log(req.url)
  next()
})

app.post('/auth/login', (req, res) => {
  const { email, password } = req.body

  res.set('Content-Type', 'application/json')

  if (email === '1' && password === '1') {
    res.status(200).send({
      token: 'asdfghhhhhh',
      user: {
        name: 'Lee'
      }
    })
  } else {
    res.status(401).end()
  }
})

module.exports = app
