var sequelize = require('sequelize');

var sequelizeInstance = new sequelize('teamdb', 'user_db', ',,user332', {
        host: 'localhost',
        port: 3308,
        dialect: 'mysql'
    });

// Initialize models
var Team = sequelizeInstance.import('./models/team');
var Player = sequelizeInstance.import('./models/player');

// Relations 1:n
// Player bekommt eine teamId
 //Team.hasMany(Player, {foreignKey: 'teamId'});
 //Player.belongsTo(Team);
// oder vom Player ausgehend
//Locations.belongsTo(Cats, {foreignKey: 'catId'});

// n:m
Player.belongsToMany(Team, { through: 'PlayerTeam'});
Team.belongsToMany(Player, { through: 'PlayerTeam'});


// Create tables with models
sequelizeInstance.sync().then(function () {
    }).catch(function (err) {
      console.log(err);
    });

module.exports = {
    sequelizeInstance: sequelizeInstance,
    sequelize: sequelize
};
