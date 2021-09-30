require('dotenv').config()

const config = {
    port: process.env.PORT,
    mongoUri:process.env.MONGOURI || 'mongodb://127.0.0.1:27017',
    dbName:process.env.DBNAME || 'tienda',
    imgUrl:process.env.IMGURL || 'https://res.cloudinary.com/soluciones-informaticas-nus/',
}

module.exports = {config}