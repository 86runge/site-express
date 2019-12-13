/**
 * 企业主资料模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user_company_profile', {
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
        country_name: {
            type: DataTypes.CHAR(50),
            comment: '公司名称'
        },
        company_type: {
            type: DataTypes.INTEGER,
            comment: '公司类型'
        },
        company_address: {
            type: DataTypes.CHAR(200),
            comment: '公司地址'
        }
    }, {
        freezeTableName: true
    });
};
