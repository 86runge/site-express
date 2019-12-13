/**
 * 用户交易配置模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user_trade_conf', {
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
        trade_password: {
            type: DataTypes.CHAR(50),
            comment: '交易密码'
        },
        operate_password: {
            type: DataTypes.CHAR(50),
            comment: '操作密码'
        }
    }, {
        freezeTableName: true
    });
};
