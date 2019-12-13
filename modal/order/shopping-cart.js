/**
 * 订单商品详情模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('shopping_cart', {
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
        shop_id: {
            type: DataTypes.UUID,
            comment: '商店id'
        },
        product_id: {
            type: DataTypes.UUID,
            comment: '商品id'
        },
        is_product_exists: {
            type: DataTypes.CHAR(1),
            comment: '是否有效'
        },
        number: {
            type: DataTypes.INTEGER,
            comment: '购买数量'
        },
        created_time: {
            type: DataTypes.DATE,
            comment: '创建时间'
        }
    })
};
