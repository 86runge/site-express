/**
 * 充值模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('finance_recharge', {
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
        recharge_type: {
            type: DataTypes.INTEGER,
            comment: '充值类型'
        },
        serial_no: {
            type: DataTypes.CHAR(100),
            comment: '充值流水号'
        },
        amount: {
            type: DataTypes.DECIMAL(20, 2),
            comment: '充值金额'
        },
        pay_channel: {
            type: DataTypes.INTEGER,
            comment: '支付渠道'
        },
        out_trade_no: {
            type: DataTypes.CHAR(100),
            comment: '支付渠道单号'
        },
        bank_name: {
            type: DataTypes.CHAR(200),
            comment: '银行开户支行名称'
        },
        bank_card_no: {
            type: DataTypes.CHAR(200),
            comment: '银行卡卡号'
        },
        bank_card_holder: {
            type: DataTypes.CHAR(200),
            comment: '银行卡持卡人姓名'
        },
        submit_remark: {
            type: DataTypes.TEXT,
            comment: '充值备注'
        },
        auditor_id: {
            type: DataTypes.UUID,
            comment: '审核员用户id'
        },
        audit_time: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            comment: '审核时间'
        },
        audit_remark: {
            type: DataTypes.TEXT,
            comment: '审核备注'
        },
        recharge_params: {
            type: DataTypes.CHAR(200),
            comment: '充值参数'
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
