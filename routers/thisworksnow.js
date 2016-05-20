var router = require('express').Router();

// Change API methods and endpoint methods to fit your needs

router.get('/apihope', function(req, res) {
  res.send('Path: /apihope');
};

module.exports = router;
