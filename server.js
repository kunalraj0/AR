const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))

app.listen(process.env.PORT || 3001, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
