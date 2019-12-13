/**
 * 商品与商品规格关联模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('product_and_specification', {
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
        specification_id: {
            type: DataTypes.UUID,
            comment: '规格id'
        },
        stock: {
            type: DataTypes.INTEGER,
            comment: '商品库存'
        },
        price: {
            type: DataTypes.DECIMAL(20, 2),
            comment: '商品价格'
        },
        intro: {
            type: DataTypes.TEXT,
            comment: '商品简介'
        },

    })
};
