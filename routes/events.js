var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('game','root', 'mhallacht', {
    host: 'localhost',
    dialect: 'mysql',
    port: '3306'
});

var events = sequelize.import('../database/models/events');

sequelize.authenticate().then(function (err) {
    if (err) {
        console.error('SAVE SEQUELIZE: Connection Error' + err);
    } else {
        console.log('SAVE SEQUELIZE: Successfully connected');
    }
});


router.get('/events', function (req, res, next) {
    events.findAll({attributes: ['name', 'description', 'link','day', 'month', 'year']}).then(function (events){
              res.json({events: events});
    });

});

module.exports = router;
