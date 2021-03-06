const express = require('express')
const app = express()
const port = 3000

app.disable("x-powered-by");

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/dummy', (req, res) => {
  bar = ['foo','bar']
  for(foo in bar){
    console.log(foo)
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})