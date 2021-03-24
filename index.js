const express = require('express');
const cors = require('cors');

const app = express();

const { config } = require('./Config/config');


 const areaApi = require('./routes/Area');
 const cardApi = require('./routes/card');
 const citiesApi = require('./routes/cities');
 const countryApi = require('./routes/country');
 const ConsultasApi = require('./routes/consulta')
 const educationLevelApi = require('./routes/educationlevel');
 const industrieApi = require('./routes/Industries');
 const positionApi = require('./routes/Position');
 const professionApi = require('./routes/profession');
 const salariesApi = require('./routes/salaries');
 const sectorApi = require('./routes/sectors');
 const  universitiesApi = require('./routes/universities')


// const {logErrors, wrapErrors, errorHandler} = require('./utils/middleware/errorHandlers')
// const  notFoundHandler  = require('./utils/middleware/notFoundHandler')
app.use(express.json());
app.use(cors());



areaApi(app);
cardApi(app);
citiesApi(app);
countryApi(app);
ConsultasApi(app);
educationLevelApi(app);
industrieApi(app);
positionApi(app)
professionApi(app);
salariesApi(app);
sectorApi(app);
universitiesApi(app);


// app.use(logErrors)
// app.use(wrapErrors)
// app.use(errorHandler)
// app.use(notFoundHandler)

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});