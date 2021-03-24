const express = require('express');
const  SectorsService = require('../services/sectors');

function sectorApi(app) {
  const router = express.Router();
  app.use('/api/sectors', router);
   
  const  sectorsService = new   SectorsService();


  router.get('/', async function(req, res, next) {
    try {
      const Sectors = await sectorsService.getSectors();

      res.status(200).json({
        data: Sectors,
        message: 'Sectors listed'
      });
    } catch (err) {
      next(err);
    }
  });


}

module.exports =  sectorApi;