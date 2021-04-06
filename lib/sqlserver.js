const  {config} = require('../Config/config');
const rest = new (require('rest-mssql-nodejs'))({
    user: config.dbUser,
    password: config.dbPassword,
    server: config.dbHost,
    database:  config.dbName,
    encrypt:  true,
    
})

class SqlSeverLib {
    
    async getAll(collection){
    const result = await rest.executeQuery('select * from' + ' ' + collection);
    return result.data;
    }

    async getId(collection , key , params){
        var consulta = 'select * from' + ' ' + collection + ' ' +'where'+ ' ' + params + ' = ' + key;
        console.log(consulta)
        const result = await rest.executeQuery('select * from' + ' ' + collection + ' ' +'where'+ ' ' + params + ' = ' + key);
        return result.data;
        }

    async getAlls(collection){
        console.log(collection)
        const result = await rest.executeQuery(collection);
         const consultas = result.data[0]
         const consultas01 =  consultas[0]
          const consulta = consultas01['']
          console.log(consulta) 
        return consulta ;
        }
}



module.exports = SqlSeverLib ;