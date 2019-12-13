/**
 * 商品规格模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('product_specification', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            comment: 'id'
        },
        product_category_id: {
            type: DataTypes.UUID,
            comment: '商品类别id'
        },
        type: {
            type: DataTypes.CHAR(45),
            comment: '规格类型'
        },
        value: {
            type: DataTypes.CHAR(45),
            comment: '规格值'
        },
    })
};
