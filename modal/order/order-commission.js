/**
 * 订单提成表模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('order_commission', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            comment: 'id'
        },
        order_id: {
            type: DataTypes.UUID,
            comment: '订单id'
        },
        seller_uid: {
            type: DataTypes.UUID,
            comment: '销售员用户id'
        },
        commission_amount: {
            type: DataTypes.DECIMAL(20, 2),
            comment: '提成金额'
        },
        cashier_uid: {
            type: DataTypes.UUID,
            comment: '财务人员用户id'
        },
        settlement_status: {
            type: DataTypes.INTEGER,
            comment: '结算状态'
        },
        settlement_time: {
            type: DataTypes.DATE,
            comment: '结算时间'
        }
    })
};
