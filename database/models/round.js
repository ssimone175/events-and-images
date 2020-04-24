module.exports = function (sequelize, DataTypes) {
    const round = sequelize.define("round", {
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
        tableName: 'round',
        timestamps: true
    });

    round.sync().then(function() {
        console.log('Round Table created successfully');
    }, function(err) {
        console.error('An error occurred while creating table : ' + err.stack);
    });

    return round;
};
