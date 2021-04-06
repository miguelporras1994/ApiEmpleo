const express = require('express');
const  PositionService = require('../services/position');

function positionApi(app) {
  const router = express.Router();
  app.use('/api/position', router);
   
  const  positionService = new   PositionService();


  router.get('/', async function(req, res, next) {
    try {
      const Position = await positionService.getPositions();

      res.status(200).json({
        data: Position,
        message: 'Position listed'
      });
    } catch (err) {
      next(err);
    }
  });


  router.get(
    '/:position',
    async function(req, res, next) {
      const { position } = req.params;
      try {
        const citie = await  positionService.getPosition(position);

        res.status(200).json({
          data: citie,
          message: 'list position of ' + position
        });
      } catch (err) {
        next(err);
      }
    }
  );


}

module.exports =  positionApi;