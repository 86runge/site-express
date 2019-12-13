/**
 * 用户开放登录帐号模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('open-account', {
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
        qq: {
            type: DataTypes.CHAR(30),
            comment: 'QQ号码'
        },
        wechat: {
            type: DataTypes.CHAR(30),
            comment: '微信号'
        },
        taobao: {
            type: DataTypes.CHAR(50),
            comment: '淘宝帐号'
        },
        skype: {
            type: DataTypes.CHAR(30),
            comment: 'Skype'
        }
    })
};
