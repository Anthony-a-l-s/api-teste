const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

app.use(express.json())
app.use(cors())

const port = process.env.URL || 3000

 app.listen (port ,() => {
    console.log('Server running on port: ' + port)
})

app.get('/hello_world', (req, res) => {
    res.send('Hello world!')
   
      
   
})