/**
 * 用户基础模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            comment: 'id'
        },
        user_name: {
            type: DataTypes.CHAR(30),
            comment: '用户名'
        },
        phone: {
            type: DataTypes.CHAR(30),
            comment: '手机号码'
        },
        email: {
            type: DataTypes.CHAR(50),
            comment: '电子邮件'
        },
        password: {
            type: DataTypes.CHAR(50),
            comment: '登录密码'
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
            comment: '用户状态'
        }
    }, {
        freezeTableName: true
    });
};
