/**
 * 交易明细模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('finance_trade_detail', {
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
        account_id: {
            type: DataTypes.UUID,
            comment: '资金账户id'
        },
        auditor_id: {
            type: DataTypes.UUID,
            comment: '审核员用户id'
        },
        trade_type: {
            type: DataTypes.INTEGER,
            comment: '交易类型'
        },
        pay_channel: {
            type: DataTypes.INTEGER,
            comment: '支付渠道'
        },
        serial_no: {
            type: DataTypes.CHAR(100),
            comment: '流水号'
        },
        amount: {
            type: DataTypes.DECIMAL(20, 2),
            comment: '交易金额'
        },
        remark_submit: {
            type: DataTypes.TEXT,
            comment: '申请备注'
        },
        audit_remark: {
            type: DataTypes.TEXT,
            comment: '审核备注'
        },
        trade_params: {
            type: DataTypes.CHAR(200),
            comment: '交易参数'
        },
        audit_time: {
            type: DataTypes.DATE,
            comment: '审核时间'
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
    })
};
