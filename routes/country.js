const express = require('express');
const  CountrysService = require('../services/country');

function countryApi(app) {
  const router = express.Router();
  app.use('/api/country', router);
   
  const  countrysService = new   CountrysService();

  router.get('/', async function(req, res, next) {
    try {
      const countrys = await countrysService.getCountrys();

      res.status(200).json({
        data: countrys,
        message: 'countrys listed'
      });
    } catch (err) {
      next(err);
    }
  });


}

module.exports =  countryApi;