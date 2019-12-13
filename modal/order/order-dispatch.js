/**
 * 订单调度模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('order_dispatch', {
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
        from_seller_uid: {
            type: DataTypes.UUID,
            comment: '被调度的营销人员用户id'
        },
        to_seller_uid: {
            type: DataTypes.UUID,
            comment: '营销人员用户id'
        },
        dispatch_admin_uid: {
            type: DataTypes.UUID,
            comment: '调度管理员'
        },
        dispatch_reason: {
            type: DataTypes.TEXT,
            comment: '调度原因'
        },
        created_time: {
            type: DataTypes.DATE,
            comment: '调度日期'
        }
    })
};
