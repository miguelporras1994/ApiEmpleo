const express = require('express');
const  CardsService = require('../services/card');

function cardApi(app) {
  const router = express.Router();
  app.use('/api/card', router);
   
  const  cardsService = new   CardsService();


  router.get('/', async function(req, res, next) {
    try {
      const cards = await cardsService.getCards();

      res.status(200).json({
        data: cards,
        message: 'cards listed'
      });
    } catch (err) {
      next(err);
    }
  });


}

module.exports =  cardApi;