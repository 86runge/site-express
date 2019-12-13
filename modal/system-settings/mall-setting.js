/**
 * 商城配置模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('mall_setting', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            comment: 'id'
        },
        show_price: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
            comment: '是否显示价格'
        },
        show_real_price: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0,
            comment: '是否显示真实价格'
        },
        alt_price: {
            type: DataTypes.CHAR(100),
            comment: '价格提示'
        }
    })
};
