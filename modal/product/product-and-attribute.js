/**
 * 商品与属性关联模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('product_and_attribute', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            comment: 'id'
        },
        product_id: {
            type: DataTypes.UUID,
            comment: '商品id'
        },
        attribute_id: {
            type: DataTypes.UUID,
            comment: '属性id'
        },
        value: {
            type: DataTypes.CHAR(45),
            comment: '属性值'
        },
    })
};
