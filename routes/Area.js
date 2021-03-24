const express = require('express');
const  AreasService = require('../services/area');

function areaApi(app) {
  const router = express.Router();
  app.use('/api/areas', router);
   
  const  areasService = new   AreasService();


  router.get('/', async function(req, res, next) {
    try {
      console.log("estoy llegado aqui")
      const areas = await areasService.getAreas();

      res.status(200).json({
        data: areas,
        message: 'areas listed'
      });
    } catch (err) {
      next(err);
    }
  });


}

module.exports =  areaApi;