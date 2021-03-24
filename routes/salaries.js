const express = require('express');
const  SalariesService = require('../services/salaries');

function salariesApi(app) {
  const router = express.Router();
  app.use('/api/salaries', router);
   
  const  salariesService = new   SalariesService();


  router.get('/', async function(req, res, next) {
    try {
      const Salaries = await salariesService.getSalaries();

      res.status(200).json({
        data: Salaries,
        message: 'Salaries listed'
      });
    } catch (err) {
      next(err);
    }
  });


}

module.exports =  salariesApi;