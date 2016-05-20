var router = require('express').Router();

// Change API methods and endpoint methods to fit your needs

router.get('/ithink', function(req, res) {
  res.send('Path: /ithink');
};

module.exports = router;
