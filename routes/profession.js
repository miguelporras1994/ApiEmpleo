const express = require('express');
const  ProfessionsService = require('../services/profession');

function professionApi(app) {
  const router = express.Router();
  app.use('/api/professions', router);
   
  const  professionsService = new ProfessionsService();


  router.get('/', async function(req, res, next) {
    try {
      const professions = await professionsService.getprofessions();

      res.status(200).json({
        data: professions,
        message: 'professions listed'
      });
    } catch (err) {
      next(err);
    }
  });


}

module.exports =  professionApi;