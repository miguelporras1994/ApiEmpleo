const  {config} = require('./Config/config');
const rest = new (require('rest-mssql-nodejs'))({
    user: config.dbUser,
    password: config.dbPassword,
    server: config.dbHost,
    database:  config.dbName,
    encrypt:  true,
    
})




 
setTimeout(async () =>{
    const result = await rest.executeQuery('select * from IdentityCardTypes' );

    console.log(result.data)

},1500)

    

