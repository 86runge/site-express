/**
 * 订单模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('order', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            comment: 'id'
        },
        order_no: {
            type: DataTypes.CHAR(45),
            comment: '订单号'
        },
        shop_id: {
            type: DataTypes.UUID,
            comment: '商店编号'
        },
        order_status: {
            type: DataTypes.INTEGER,
            comment: '订单状态'
        },
        product_count: {
            type: DataTypes.INTEGER,
            comment: '商品项数量'
        },
        product_amount_total: {
            type: DataTypes.DECIMAL(20, 2),
            comment: '商品总价'
        },
        order_amount_total: {
            type: DataTypes.DECIMAL(20, 2),
            comment: '订单金额'
        },
        logistics_fee: {
            type: DataTypes.DECIMAL(20, 2),
            comment: '运费金额'
        },
        is_unpacking_inspection: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0,
            comment: '是否开箱验货'
        },
        is_invoice: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0,
            comment: '是否开票'
        },
        invoice_id: {
            type: DataTypes.UUID,
            comment: '发票id'
        },
        address_id: {
            type: DataTypes.UUID,
            comment: '收货地址id'
        },
        logistics_id: {
            type: DataTypes.UUID,
            comment: '订单物流id'
        },
        pay_channel: {
            type: DataTypes.INTEGER,
            comment: '订单支付渠道'
        },
        out_trade_no: {
            type: DataTypes.CHAR(45),
            comment: '订单支付单号'
        },
        order_time: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            comment: '下单时间'
        },
        payment_time: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            comment: '付款时间'
        },
        delivery_time: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            comment: '发货时间'
        },
        customer_id: {
            type: DataTypes.CHAR(45),
            comment: '客户编号'
        },
        customer_note: {
            type: DataTypes.TEXT,
            comment: '客户备注'
        },
        order_settlement_status: {
            type: DataTypes.INTEGER,
            comment: '订单结算状态'
        },
        order_settlement_time: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            comment: '订单结算时间'
        }
    }, {
        freezeTableName: true
    });
};
