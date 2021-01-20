/**
 * 资金账户模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('finance_account', {
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
        advance: {
            type: DataTypes.DECIMAL(20, 2),
            comment: '预付款'
        },
        advance_frozen: {
            type: DataTypes.DECIMAL(20, 2),
            comment: '冻结预付款'
        },
        balance: {
            type: DataTypes.DECIMAL(20, 2),
            comment: '可用余额'
        },
        balance_frozen: {
            type: DataTypes.DECIMAL(20, 2),
            comment: '冻结余额'
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
            comment: '状态'
        },
        created_time: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            comment: '创建时间'
        },
        updated_time: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            comment: '更新时间'
        },
    })
};
