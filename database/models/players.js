module.exports = function (sequelize, DataTypes) {
    const players = sequelize.define("players", {
        idPlayer: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },
        playerName: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        playerCardOne: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        playerCardTwo: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        playerCardThree: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        playerCardFour: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        playerCardFive: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        activePlayer:{
          type:DataTypes.BOOLEAN,
          defaultValue: 0
        },
        playerRole: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        saveName: {
            type: DataTypes.STRING,
            defaultValue: ''
        }
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
