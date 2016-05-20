var express = require ('express');
var newRouterwow = require('../routers/newRouterwow');
var thisworksnow = require('../routers/thisworksnow');

var app = express();

app.use('/', newRouterwow);
app.use('/api', thisworksnow);

app.listen(9000, function () {
  console.log('cfood listening on port 9000');
};
