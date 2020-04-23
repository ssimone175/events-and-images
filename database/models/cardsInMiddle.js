module.exports = function (sequelize, DataTypes) {
    const cardsInMiddle = sequelize.define("cardsInMiddle", {
        idCard: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },
        value: {
            type: DataTypes.STRING,
            defaultValue:' '
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
        tableName: 'cardsInMiddle',
        timestamps: true
    });

    cardsInMiddle.sync().then(function() {
        console.log('Middle Table created successfully');
    }, function(err) {
        console.error('An error occurred while creating table : ' + err.stack);
    });

    return cardsInMiddle;
};
