/**
 * 银行卡模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('finance_bankcard', {
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
        usage_count: {
            type: DataTypes.INTEGER,
            comment: '使用次数'
        },
        sort: {
            type: DataTypes.INTEGER,
            comment: '排列次序'
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
            comment: '状态'
        },
        created_time: {
            type: DataTypes.DATE,
            comment: '创建时间'
        }
    })
};
