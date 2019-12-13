/**
 * 提现模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('finance_withdraw', {
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
        serial_no: {
            type: DataTypes.CHAR(100),
            comment: '流水号'
        },
        amount: {
            type: DataTypes.DECIMAL(20, 2),
            comment: '提现金额'
        },
        commission: {
            type: DataTypes.DECIMAL(20, 2),
            comment: '手续费'
        },
        remark_submit: {
            type: DataTypes.TEXT,
            comment: '提现申请备注'
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
        pay_channel: {
            type: DataTypes.INTEGER,
            comment: '支付渠道'
        },
        out_trade_no: {
            type: DataTypes.CHAR(100),
            comment: '支付渠道单号'
        },
        withdraw_params: {
            type: DataTypes.CHAR(200),
            comment: '提现参数'
        },
        auditor_id: {
            type: DataTypes.UUID,
            comment: '审核员用户id'
        },
        audit_time: {
            type: DataTypes.DATE,
            comment: '审核时间'
        },
        audit_remark: {
            type: DataTypes.TEXT,
            comment: '审核备注'
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
            comment: '状态'
        },
        created_time: {
            type: DataTypes.DATE,
            comment: '创建时间'
        },
        updated_time: {
            type: DataTypes.DATE,
            comment: '更新时间'
        },
    })
};
