const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/poll', {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log("connected to database"))
.catch((err)=>console.log("Error while connecting to database", err))