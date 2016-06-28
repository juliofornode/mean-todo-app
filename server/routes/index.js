var express = require('express');
var todos = require('../../mocks/todos.json');

var router = express.Router();


router.route('/todos')
    .get(function(req, res) {
        res.json({ "todos": todos });
    });

//TODO: POST to create new entries.

//TODO: PUT to update existing entries.

//TODO: DELETE to delete existing entries.


module.exports = router;