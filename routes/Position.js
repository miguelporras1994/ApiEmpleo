const express = require('express');
const  PositionService = require('../services/position');

function positionApi(app) {
  const router = express.Router();
  app.use('/api/position', router);
   
  const  positionService = new   PositionService();


  router.get('/', async function(req, res, next) {
    try {
      const Position = await positionService.getPosition();

      res.status(200).json({
        data: Position,
        message: 'Position listed'
      });
    } catch (err) {
      next(err);
    }
  });


}

module.exports =  positionApi;