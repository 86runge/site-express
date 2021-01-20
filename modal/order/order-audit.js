/**
 * 订单业务审核流程模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('order_audit', {
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
        order_status: {
            type: DataTypes.INTEGER,
            comment: '订单状态'
        },
        is_seller_risk_confirm: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0,
            comment: '销售员直接确认订单'
        },
        is_seller_punish_logistics_fee: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
            comment: '订单退货,销售员是否承担运费'
        },
        is_seller_commission: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
            comment: '销售员是否提成'
        },
        seller_commission_rate: {
            type: DataTypes.DECIMAL(20, 2),
            comment: '销售员提成比例'
        },
        seller_commission_amount: {
            type: DataTypes.DECIMAL(20, 2),
            comment: '销售员提成金额'
        },
        seller_remark: {
            type: DataTypes.TEXT,
            comment: '销售员订单备注'
        },
        confirm_remark: {
            type: DataTypes.TEXT,
            comment: '订单审核员订单备注'
        },
        storekeeper_return_remark: {
            type: DataTypes.TEXT,
            comment: '仓管备注'
        },
        cashier_remark: {
            type: DataTypes.TEXT,
            comment: '财务备注'
        },
        seller_uid: {
            type: DataTypes.UUID,
            comment: '销售员用户id'
        },
        auditor_uid: {
            type: DataTypes.UUID,
            comment: '订单审核员用户id'
        },
        cashier_uid: {
            type: DataTypes.UUID,
            comment: '收款人用户id'
        },
        accountant_uid: {
            type: DataTypes.UUID,
            comment: '财务用户id'
        },
        order_source: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            comment: '订单来源'
        },
        auditor_audited_time: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            comment: '订单审核员审核时间'
        },
        storekeeper_audited_time: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            comment: '仓管员审核时间'
        },
        accountant_audited_time: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            comment: '财务审核时间'
        }
    })
};
