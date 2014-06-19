var routes = module.exports = require('express').Router();

routes.get('/', function(req, res) {
    res.render('index');
});