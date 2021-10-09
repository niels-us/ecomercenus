const express=require('express')
const app =express()
const cors = require('cors')
app.use(cors())

// middelwares
app.use(express.json())


//Rutas
app.use(require('./routes/usuario'))
app.use(require('./routes/categoria'))
app.use(require('./routes/producto'))
app.use(require('./routes/venta'))
app.use(require('./routes/detalleventa'))
app.use(require('./routes/tipodocumento'))
app.use(require('./routes/tipousuario'))
app.use(require('./routes/tipocomprobante'))
app.use(require('./routes/tipomoneda'))


app.listen(5000)
console.log('Server on port 5000')