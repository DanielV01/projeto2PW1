const Sequelize = require("sequelize");

const sequelize = new Sequelize('projeto2PW1', 'postgres', '125678',{
    host: "localhost",
    dialect: "postgres"
})

sequelize.authenticate().then(() => {
    console.log("Conectado com sucesso ao banco.")
}).catch((erro) =>{
    console.log(`Erro ao conecta ao banco: ${erro}`)
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

