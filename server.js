const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
