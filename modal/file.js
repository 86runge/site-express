'use strict';

module.exports = function (sequelize, DataTypes) {
    var File = sequelize.define('file', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1
        },
        path: {
            type: DataTypes.STRING
        }
    }, {
        freezeTableName: true
    });
    return File;
};