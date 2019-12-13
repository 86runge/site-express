/**
 * 登录日志模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user_login_log', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            comment: 'id'
        },
        login_id: {
            type: DataTypes.UUID,
            comment: '登陆账号'
        },
        login_ip: {
            type: DataTypes.CHAR(50),
            comment: '登录IP'
        },
        login_time: {
            type: DataTypes.DATE,
            comment: '登录时间'
        },
        login_params: {
            type: DataTypes.CHAR(100),
            comment: '登录参数'
        },
        is_login: {
            type: DataTypes.BOOLEAN,
            comment: '是否登入(0:登出,1:登入)'
        },
        result_status: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
            comment: '操作结果'
        }
    }, {
        freezeTableName: true
    });
};
