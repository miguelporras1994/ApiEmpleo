const express = require('express');
const  ConsultasService = require('../services/consulta');

function ConsultasApi(app) {
  const router = express.Router();
  app.use('/api/Consulta', router);
   
  const  consultasService = new ConsultasService();

  router.get('/', async function(req, res, next) {
    try {
      const Consultas = await consultasService.getConsultas();

      res.status(200).json({
        data: Consultas,
        message: 'Consultas listed'
      });
    } catch (err) {
      next(err);
    }
  });


}

module.exports =  ConsultasApi;