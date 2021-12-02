const Sequelize = require('sequelize');
const directorModel = require('./models/directors')

// nombre de la base de datos, usuario para conectarse, password, objeto de config

const sequelize = new Sequelize('video-club', 'root', 'martin9898dance', {
    host: 'localhost',//direccion del rdbms,
    dialect: 'mysql'
});

const Director = directorModel(sequelize, Sequelize);

sequelize.sync({
    force: true
}).then(()=>{
    console.log("Base de datos actualizada correctamente")
})

module.exports = {
    Director
}