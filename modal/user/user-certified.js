/**
 * 用户证件资料模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user_certified', {
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
            comment: '证件类型'
        },
        cert_no: {
            type: DataTypes.CHAR(100),
            comment: '证件号码'
        },
        cert_exp: {
            type: DataTypes.DATE,
            comment: '证件过期时间'
        }
    }, {
        freezeTableName: true
    });
};
