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
    console.log(result.data)
    return result.data;
    }


    async getAlls(collection){
        console.log(collection)
        const result = await rest.executeQuery(collection);
        console.log(result.data)
      
        return result.data;
        }
}



module.exports = SqlSeverLib ;