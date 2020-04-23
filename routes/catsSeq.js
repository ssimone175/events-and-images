var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('cats','user_db', ',,user332', {
    host: 'localhost',
    dialect: 'mysql',
    port: '3306'
});

var cats = sequelize.import('../database/models/cats');

sequelize.authenticate().then(function (err) {
    if (err) {
        console.error('CATS SEQUELIZE: Connection Error' + err);
    } else {
        console.log('CATS SEQUELIZE: Successfully connected');
    }
});


/*router.get('/:catId', function (req, res, next) {
      cats.findOne({
        where: {idCat: req.params.catId},
        attributes: ['idCat', 'name', 'description', 'trusting', 'location', 'picture']
        then(cat => {
  // project will be the first entry of the Projects table with the title 'aProject' || null
      })
});*/

router.get('/', function (req, res, next) {
    cats.findAll({attributes: ['idCat', 'name', 'description', 'trusting', 'locationX','locationY', 'picture']}).then(function (cats) {
        res.json({"cats": cats});
    })
});

router.delete('/delete/:idCat', function (req, res, next) {
    var idCat = req.params.idCat || '';
    console.log(req.params);
    cats.destroy({where: {idCat: idCat}});
    res.json({info: idCat.concat(" deleted")});
});

router.put('/edit/:idCat', function (req, res, next) {
    console.log(req.params);
    var catId = req.params.idCat || '';
    var nameCat = req.body.name || '';
    var descriptionCat = req.body.description || '';
    var trustingCat = req.body.trusting || '';
    var locationXCat  = req.body.locationX || '';
    var locationYCat  = req.body.locationY || '';
    var pictureCat  = req.body.picture || '';
    cats.update(
      {name: nameCat,
      description: descriptionCat,
      trusting: trustingCat,
      locationX: locationXCat,
      locationY: locationYCat,
      picture: pictureCat},
      {where: {idCat: catId}}
    )
    res.json({"info": "Geändert"});
});

router.post('/new', function (req, res, next) {
    console.log(req.body)
    var name = req.body.name || '';
    var description = req.body.description || '';
    var trusting = req.body.trusting || '';
    var locationX  = req.body.locationX || '';
    var locationY  = req.body.locationY || '';
    var picture  = req.body.picture || '';

    var newCat = cats.build({
        name: name,
        description: description,
        trusting: trusting,
        locationX: locationX,
        locationY: locationY,
        picture: picture
    });

    newCat.save().catch(function (error) {
        console.log('Error while inserting: ' + error.stack);
    });
    res.json({"info": "Neu angelegt"});
});



module.exports = router;
