const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')

const poll = require('./routes/poll.js')

const app = express()

require('./config/db')
//setting public folder
app.use(express.static(path.join(__dirname,'public')))

// Body parser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

app.use(cors())

const PORT = process.env.PORT | 3000

app.use('/poll', poll)

app.listen(PORT, ()=>{
    console.log("Server listens on the port "+ PORT)
})