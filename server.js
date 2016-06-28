var express = require('express');
var logger = require('morgan');
var router = require('./server/routes');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo023', function(error) {
    if(error) {
        console.log('error connecting database');
    } else {
        console.log('connected to database');
    }
});

var taskSchema = new mongoose.Schema({
    task: String
});

var Task = mongoose.model('Task', taskSchema);

var taskOne = new Task({
    task: "lavar el coche"
});

taskOne.save();

var app = express();


app.use(express.static('client'));
app.use('/api', router);
app.use(logger('combined'));




app.listen(3000, function() {
    console.log('the server is listening on port 3000.');
});