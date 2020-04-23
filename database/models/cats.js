module.exports = function (sequelize, DataTypes) {
    const cats = sequelize.define("cats", {
        idCat: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        description: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
         trusting: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        locationX: {
            type: DataTypes.FLOAT,
            defaultValue: 9.6380
        },
        locationY: {
            type: DataTypes.FLOAT,
            defaultValue: 47.8096
        },
        picture: {
            type: DataTypes.STRING,
            defaultValue: ''
        },

    },{
        freezeTableName: true,
        tableName: 'cats',
        timestamps: true
    });

    cats.sync().then(function() {
        console.log('Cat table created successfully');
    }, function(err) {
        console.error('An error occurred while creating table : ' + err.stack);
    });

    return cats;
};
