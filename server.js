var express = require('express');
var router = require('./server/routes');


var app = express();


app.use(express.static('client'));
app.use('/api', router);



app.listen(3000, function() {
    console.log('the server is listening on port 3000.');
});