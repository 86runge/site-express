/**
 * 订单退货模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('order_returns', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            comment: 'id'
        },
        returns_no: {
            type: DataTypes.CHAR(45),
            comment: '退货编号'
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
            type: DataTypes.CHAR(45),
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
            type: DataTypes.CHAR(45),
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
            type: DataTypes.DECIMAL(20, 2),
            comment: '物流发货运费'
        },
        order_logistics_status: {
            type: DataTypes.INTEGER,
            comment: '物流状态'
        },
        logistics_result_last: {
            type: DataTypes.TEXT,
            comment: '物流最后状态描述'
        },
        logistics_result: {
            type: DataTypes.TEXT,
            comment: '物流描述'
        },
        logistics_update_time: {
            type: DataTypes.DATE,
            comment: '物流更新时间'
        },
        logistics_delivery_time: {
            type: DataTypes.DATE,
            comment: '物流发货时间'
        },
        returns_type: {
            type: DataTypes.INTEGER,
            comment: '退货类型'
        },
        returns_handling_way: {
            type: DataTypes.INTEGER,
            comment: '退货处理方式'
        },
        returns_amount: {
            type: DataTypes.DECIMAL(20, 2),
            comment: '退款金额'
        },
        seller_punish_fee: {
            type: DataTypes.DECIMAL(20, 2),
            comment: '退货销售员承担的费用'
        },
        return_submit_time: {
            type: DataTypes.DATE,
            comment: '退货申请时间'
        },
        handling_time: {
            type: DataTypes.DATE,
            comment: '退货处理时间'
        },
        returns_reason: {
            type: DataTypes.INTEGER,
            comment: '退货原因'
        },
        others_returns_reason: {
            type: DataTypes.TEXT,
            comment: '退货原因(其他原因)'
        }
    })
};
