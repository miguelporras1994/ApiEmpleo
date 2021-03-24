const express = require('express');
const  UniversitiesService = require('../services/universities');

function universitiesApi(app) {
  const router = express.Router();
  app.use('/api/universities', router);
   
  const  universitiesService = new   UniversitiesService();


  router.get('/', async function(req, res, next) {
    try {
      const Universities = await universitiesService.getUniversities();

      res.status(200).json({
        data: Universities,
        message: 'Universities listed'
      });
    } catch (err) {
      next(err);
    }
  });


}

module.exports =  universitiesApi;