module.exports = function (sequelize, DataTypes) {
    const usedCards = sequelize.define("usedCards", {
        idCard: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },
        value: {
            type: DataTypes.STRING,
            defaultValue: ''
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
        tableName: 'usedCards',
        timestamps: true
    });

    usedCards.sync().then(function() {
        console.log('usedCards Table created successfully');
    }, function(err) {
        console.error('An error occurred while creating table : ' + err.stack);
    });

    return usedCards;
};
