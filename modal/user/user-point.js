/**
 * 用户积分模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user_point', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            comment: 'id'
        },
        user_id: {
            type: DataTypes.UUID,
            comment: '用户id'
        },
        point: {
            type: DataTypes.INTEGER,
            comment: '用户积分'
        },
        point_frozen: {
            type: DataTypes.INTEGER,
            comment: '冻结积分'
        },
        point_consuming: {
            type: DataTypes.INTEGER,
            comment: '已消费积分'
        }
    }, {
        freezeTableName: true
    });
};
