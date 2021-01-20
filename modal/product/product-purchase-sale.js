/**
 * 商品进销存模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('product_purchase_sale', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            comment: 'id'
        },
        product_id: {
            type: DataTypes.UUID,
            comment: '商品id'
        },
        warehouse_quantity: {
            type: DataTypes.INTEGER,
            comment: '出入库数量'
        },
        price: {
            type: DataTypes.DECIMAL(20, 2),
            comment: '单价'
        },
        subtotal: {
            type: DataTypes.DECIMAL(20, 2),
            comment: '小计金额'
        },
        stock_old: {
            type: DataTypes.INTEGER,
            comment: '旧库存'
        },
        stock_new: {
            type: DataTypes.INTEGER,
            comment: '新库存'
        },
        direction: {
            type: DataTypes.INTEGER,
            comment: '出入库方向'
        },
        operate_type: {
            type: DataTypes.INTEGER,
            comment: '出入库类型'
        },
        order_id: {
            type: DataTypes.UUID,
            comment: '订单id'
        },
        provider_id: {
            type: DataTypes.UUID,
            comment: '供应商id'
        },
        note: {
            type: DataTypes.TEXT,
            comment: '备注信息'
        },
        user_id: {
            type: DataTypes.UUID,
            comment: '经手人用户id'
        },
        auditor_uid: {
            type: DataTypes.UUID,
            comment: '审批人员用户id'
        },
        statistics_result: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
            comment: '出入库结果'
        },
        statistics_time: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            comment: '出入库时间'
        }
    })
};
