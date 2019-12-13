/**
 * 开放登录配置模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('oauth_setting', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            comment: 'id'
        },
        name: {
            type: DataTypes.CHAR(50),
            comment: '名称'
        },
        client_id: {
            type: DataTypes.CHAR(100),
            comment: '应用ID'
        },
        client_secret: {
            type: DataTypes.CHAR(100),
            comment: '应用密码'
        },
        verification: {
            type: DataTypes.CHAR(100),
            comment: '网站验证'
        },
        callback_url: {
            type: DataTypes.CHAR(100),
            comment: '回调地址'
        },
        widget: {
            type: DataTypes.CHAR(100),
            comment: '网页组件'
        },
        auto_login: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
            comment: '自动登录'
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
