'use strict';

module.exports = function (sequelize, DataTypes) {
    var Good = sequelize.define('good', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1
        },
        name: {
            type: DataTypes.STRING
        },
        age: {
            type: DataTypes.INTEGER
        },
        height: {
            type: DataTypes.INTEGER
        },
        weight: {
            type: DataTypes.INTEGER
        }
    }, {
        freezeTableName: true
    });

    return Good;
};