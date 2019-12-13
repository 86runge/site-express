/**
 * 网站安全配置模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('site_secure', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            comment: 'id'
        },
        encrypt_key: {
            type: DataTypes.CHAR(200),
            comment: '加密密匙'
        },
        session_prefix: {
            type: DataTypes.CHAR(200),
            comment: '会话数据前缀'
        },
        allow_register: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
            comment: '是否允许注册'
        },
        backup_root: {
            type: DataTypes.CHAR(200),
            comment: '数据库备份根目录'
        },
        captcha_status: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
            comment: '加密密匙'
        },
        admin_email: {
            type: DataTypes.CHAR(100),
            comment: '管理员邮箱'
        },
        admin_phone: {
            type: DataTypes.CHAR(50),
            comment: '管理员手机号'
        },
    })
};
