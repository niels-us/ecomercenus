const MongoLib = require('../lib/mongo')
const { config } = require('../config/index')

class ProductoService{
    constructor(){
        this.collection = 'app_producto'
        this.mongoDB = new MongoLib()
    }

    async getAll(){
        const data = await this.mongoDB.getAll(this.collection)
        return data || []
    }

    async createProducto(producto){
        console.log(producto)
        const productoId = await this.mongoDB.create(this.collection,producto)
        return productoId
    }

    // async updateClienteByEmail(cliente){
    //     console.log(cliente)
    //     const clienteId = await this.mongoDB.updateByEmail(this.collection,cliente.email,cliente)
    //     return clienteId
    // }
}

module.exports = ProductoService