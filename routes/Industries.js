const express = require('express');
const  IndustriesService = require('../services/Industries');

function industrieApi(app) {
  const router = express.Router();
  app.use('/api/industries', router);
   
  const  industriesService = new   IndustriesService();


  router.get('/', async function(req, res, next) {
    try {
      const Industries = await industriesService.getIndustries();

      res.status(200).json({
        data: Industries,
        message: 'Industries listed'
      });
    } catch (err) {
      next(err);
    }
  });


}

module.exports =  industrieApi;