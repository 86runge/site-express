/**
 * 虚拟货币交易转换明细模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('finance_virtual_trade', {
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
        auditor_id: {
            type: DataTypes.UUID,
            comment: '审核员用户id'
        },
        virtual_trade_type: {
            type: DataTypes.INTEGER,
            comment: '交易类型'
        },
        transform_type: {
            type: DataTypes.INTEGER,
            comment: '转换类型'
        },
        serial_no: {
            type: DataTypes.CHAR(100),
            comment: '流水号'
        },
        consume_number: {
            type: DataTypes.INTEGER,
            comment: '消耗数量'
        },
        transform_number: {
            type: DataTypes.INTEGER,
            comment: '转换数量'
        },
        remark_submit: {
            type: DataTypes.TEXT,
            comment: '交易申请备注'
        },
        audit_remark: {
            type: DataTypes.TEXT,
            comment: '交易审核备注'
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
