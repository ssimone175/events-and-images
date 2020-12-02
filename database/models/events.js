module.exports = function (sequelize, DataTypes) {
    const events = sequelize.define("events", {
        eventId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            defaultValue:' '
        },
        description: {
            type: DataTypes.STRING,
            defaultValue:' '
        },
        link: {
            type: DataTypes.STRING,
            defaultValue:' '
        },
        day:{
            type: DataTypes.INTEGER,
            defaultValue:0,
        },
        month:{
            type: DataTypes.INTEGER,
            defaultValue:0,
        },
        year:{
            type: DataTypes.INTEGER,
            defaultValue:0,
        }
    },{
        freezeTableName: true,
        tableName: 'events',
        timestamps: true
    });

    events.sync().then(function() {
        console.log('Events created successfully');
    }, function(err) {
        console.error('An error occurred while creating table : ' + err.stack);
    });

    return events;
};
