/**
 * 用户身份认证资料模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user_certificate', {
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
        cert_type: {
            type: DataTypes.INTEGER,
            comment: '认证类型'
        },
        cert_no: {
            type: DataTypes.CHAR(50),
            comment: '认证号码'
        },
        cert_status: {
            type: DataTypes.INTEGER,
            comment: '认证状态'
        },
        captcha: {
            type: DataTypes.CHAR(20),
            comment: '认证验证码'
        },
        captcha_exp: {
            type: DataTypes.DATE,
            comment: '认证验证码过期时间'
        },
        submit_time: {
            type: DataTypes.DATE,
            comment: '认证申请时间'
        },
        audit_time: {
            type: DataTypes.DATE,
            comment: '认证审核时间'
        },
        submit_remark: {
            type: DataTypes.TEXT,
            comment: '认证申请备注'
        },
        audit_remark: {
            type: DataTypes.TEXT,
            comment: '认证审核备注'
        }
    }, {
        freezeTableName: true
    });
};
