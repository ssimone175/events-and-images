module.exports = function (sequelize, DataTypes) {
    const players = sequelize.define("players", {
        idRound: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },
        value:{
          type: DataTypes.INTEGER,
          defaultValue:0
        },
        saveName: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        // playerRole: {
        //     type: DataTypes.STRING,
        //     defaultValue: ''
        // },
    },{
        freezeTableName: true,
        tableName: 'players',
        timestamps: true
    });

    players.sync().then(function() {
        console.log('Player Table created successfully');
    }, function(err) {
        console.error('An error occurred while creating table : ' + err.stack);
    });

    return players;
};
