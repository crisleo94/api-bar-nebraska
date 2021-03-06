const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const errorController = require('./controllers/error')

const barNebraskaRoutes = require('./routes/barNebraska')
const port = process.env.PORT || 4000

const uri = 'mongodb+srv://codescripters:Cs.2019@codescripters-1hxt3.mongodb.net/barNebraska?retryWrites=true&w=majority'
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use(barNebraskaRoutes)

app.use((error, req, res, next) => {
    console.log(error)
    const status = error.statusCoode || 500
    const message = error.message
    res.status(status).json({
        message: message,
        error: true
    })
})

app.use(errorController.get404)

mongoose.connect(uri, options)
    .then(res => {
        console.dir('Runing on port 8080')
        app.listen(port)
    })

    .catch(err => {
        console.log(err)
    })