const express = require('express');
const  EducationLevelsService = require('../services/educationLevel');

function educationLevelApi(app) {
  const router = express.Router();
  app.use('/api/educationlevel', router);
   
  const  educationLevelsService = new   EducationLevelsService();

  router.get('/', async function(req, res, next) {
    try {
      const EducationLevels = await educationLevelsService.getEducationLevels();

      res.status(200).json({
        data: EducationLevels,
        message: 'EducationLevels listed'
      });
    } catch (err) {
      next(err);
    }
  });


}

module.exports =  educationLevelApi;