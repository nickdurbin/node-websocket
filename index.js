require('dotenv').config()

const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, function() {
  console.log(`Server listening on PORT: ${PORT}`)
})

// Static files
app.use(express.static('public'))