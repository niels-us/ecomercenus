const express = require('express')
const cors = require('cors')
const app = express()

const { config } = require('./config/index')
const productosApi = require('./routes/productos')

app.use(cors())

app.use(express.json());

productosApi(app)

app.listen(config.port,function(){
    console.log(`Servidor listo http://localhost:${config.port}`)
})