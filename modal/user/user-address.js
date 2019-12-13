/**
 * 用户居住地址模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user_address', {
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
        country: {
            type: DataTypes.CHAR(30),
            comment: '国家'
        },
        province: {
            type: DataTypes.CHAR(30),
            comment: '省份'
        },
        city: {
            type: DataTypes.CHAR(30),
            comment: '城市'
        },
        area: {
            type: DataTypes.CHAR(50),
            comment: '地区'
        },
        street: {
            type: DataTypes.CHAR(200),
            comment: '街道详细地址'
        }
    }, {
        freezeTableName: true
    });
};
