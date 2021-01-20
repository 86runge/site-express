/**
 * 订单物流模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('order_logistics', {
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
        order_no: {
            type: DataTypes.CHAR(45),
            comment: '订单编号'
        },
        express_no: {
            type: DataTypes.UUID,
            comment: '物流单号'
        },
        consignee_name: {
            type: DataTypes.CHAR(45),
            comment: '收货人姓名'
        },
        consignee_phone: {
            type: DataTypes.CHAR(45),
            comment: '联系电话'
        },
        sub_consignee_phone: {
            type: DataTypes.CHAR(45),
            comment: '备用联系电话'
        },
        consignee_address: {
            type: DataTypes.CHAR(200),
            comment: '收货地址'
        },
        consignee_code: {
            type: DataTypes.CHAR(45),
            comment: '邮政编码'
        },
        logistics_type: {
            type: DataTypes.INTEGER,
            comment: '物流方式'
        },
        logistics_id: {
            type: DataTypes.CHAR(45),
            comment: '物流商家编号'
        },
        logistics_fee: {
            type: DataTypes.DECIMAL(20, 4),
            comment: '物流发货运费'
        },
        agency_fee: {
            type: DataTypes.DECIMAL(20, 4),
            comment: '快递代收货款费率'
        },
        delivery_amount: {
            type: DataTypes.DECIMAL(20, 4),
            comment: '物流成本金额'
        },
        order_logistics_status: {
            type: DataTypes.INTEGER,
            comment: '物流状态'
        },
        logistics_settlement_status: {
            type: DataTypes.INTEGER,
            comment: '物流结算状态'
        },
        logistics_result_last: {
            type: DataTypes.TEXT,
            comment: '物流最后状态描述'
        },
        logistics_result: {
            type: DataTypes.TEXT,
            comment: '物流描述'
        },
        logistics_create_time: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            comment: '发货时间'
        },
        logistics_update_time: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            comment: '物流更新时间'
        },
        logistics_settlement_time: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            comment: '物流结算时间'
        },
        logistics_payment_channel: {
            type: DataTypes.INTEGER,
            comment: '物流支付渠道'
        },
        logistics_payment_no: {
            type: DataTypes.CHAR(45),
            comment: '物流支付单号'
        },
        reconciliation_status: {
            type: DataTypes.BOOLEAN,
            comment: '物流公司已对账状态'
        },
        reconciliation_time: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            comment: '物流公司对账日期'
        },
    })
};
