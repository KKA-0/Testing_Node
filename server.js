
const express = require('express')
const app = express()
const port = 3000
const auth = require('./routes/auth.routes')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api', auth)


mongoose.connect('mongodb+srv://admin:admin@cluster0.un0qo4j.mongodb.net/?retryWrites=true&w=majority').then(()=> {console.log("DB connection Complete")}).catch((err) => {console.log("DB connection error", err)})

app.listen(port, () => {
  console.log(`Server of PORT: ${port}`)
})
