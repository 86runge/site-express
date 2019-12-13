/**
 * 商品模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('product', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            comment: 'id'
        },
        product_name: {
            type: DataTypes.CHAR(45),
            comment: '商品名称'
        },
        marque: {
            type: DataTypes.CHAR(45),
            comment: '商品型号'
        },
        barcode: {
            type: DataTypes.CHAR(45),
            comment: '仓库条码'
        },
        type_id: {
            type: DataTypes.UUID,
            comment: '类型id'
        },
        category_id: {
            type: DataTypes.UUID,
            comment: '类别id'
        },
        brand_id: {
            type: DataTypes.UUID,
            comment: '品牌id'
        },
        price: {
            type: DataTypes.DECIMAL(20, 2),
            comment: '商品价格'
        },
        market_price: {
            type: DataTypes.DECIMAL(20, 2),
            comment: '市场价格'
        },
        cost_price: {
            type: DataTypes.DECIMAL(20, 2),
            comment: '成本价格'
        },
        stock: {
            type: DataTypes.INTEGER,
            comment: '库存量'
        },
        warning_stock: {
            type: DataTypes.INTEGER,
            comment: '告警库存'
        },
        integral: {
            type: DataTypes.INTEGER,
            comment: '商品积分'
        },
        photo: {
            type: DataTypes.STRING,
            comment: '商品主图'
        },
        status: {
            type: DataTypes.INTEGER,
            comment: '状态'
        }
    })
};
