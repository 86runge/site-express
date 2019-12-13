/**
 * 商品统计模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('product_statistics', {
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
        visit_count: {
            type: DataTypes.INTEGER,
            comment: '浏览次数'
        },
        reply_count: {
            type: DataTypes.INTEGER,
            comment: '评论次数'
        },
        sale_quantity: {
            type: DataTypes.INTEGER,
            comment: '销售总量'
        },
        sale_amount: {
            type: DataTypes.DECIMAL(20, 2),
            comment: '销售总额'
        },
        purchase_quantity: {
            type: DataTypes.INTEGER,
            comment: '进货总量'
        },
        purchase_amount: {
            type: DataTypes.DECIMAL(20, 2),
            comment: '进货总额'
        },
        cost_price: {
            type: DataTypes.DECIMAL(20, 2),
            comment: '成本均价'
        },
        gross_profit: {
            type: DataTypes.DECIMAL(20, 2),
            comment: '毛利润金额'
        }
    })
};
