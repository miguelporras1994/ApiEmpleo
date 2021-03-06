const express = require('express');
const  CitiesService = require('../services/cities');

function citiesApi(app) {
  const router = express.Router();
  app.use('/api/cities', router);
   
  const  citiesService = new CitiesService();

  router.get('/', async function(req, res, next) {
    try {
      const cities = await citiesService.getCities();

      res.status(200).json({
        data: cities,
        message: 'cities listed'
      });
    } catch (err) {
      next(err);
    }
  });


  router.get(
    '/:countryId',
    async function(req, res, next) {
      const { countryId } = req.params;
      try {
        const citie = await citiesService.getCitie({ countryId });

        res.status(200).json({
          data: citie,
          message: 'movie retrieved'
        });
      } catch (err) {
        next(err);
      }
    }
  );


}

module.exports =  citiesApi;