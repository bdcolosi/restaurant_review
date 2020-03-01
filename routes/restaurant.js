const express = require('express'),
  router = express.Router(),
  restaurantModel = require('../models/restaurant');

router.get('/', async function(req, res, next) {
  const restaurantData = await restaurantModel.getAll();

  res.render('template', {
    locals: {
      title: 'Food',
      data: restaurantData
    },
    partials: {
      partial: 'partial-restaurant'
    }
  });
});

module.exports = router;