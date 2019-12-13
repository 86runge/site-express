/**
 * 订单商品详情模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('order_detail', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            comment: 'id'
        },
        order_id: {
            type: DataTypes.UUID,
            comment: '订单id'
        },
        order_no: {
            type: DataTypes.CHAR(45),
            comment: '订单编号'
        },
        product_no: {
            type: DataTypes.CHAR(45),
            comment: '商品编号'
        },
        product_name: {
            type: DataTypes.CHAR(45),
            comment: '商品名称'
        },
        product_price: {
            type: DataTypes.DECIMAL(20, 2),
            comment: '商品价格'
        },
        product_marque: {
            type: DataTypes.CHAR(45),
            comment: '商品型号'
        },
        product_store_barcode: {
            type: DataTypes.CHAR(200),
            comment: '商品条码'
        },
        product_mode_desc: {
            type: DataTypes.CHAR(100),
            comment: '商品型号信息'
        },
        product_mode_params: {
            type: DataTypes.CHAR(100),
            comment: '商品型号参数'
        },
        discount_rate: {
            type: DataTypes.DECIMAL(20, 2),
            comment: '折扣比例'
        },
        discount_amount: {
            type: DataTypes.DECIMAL(20, 2),
            comment: '折扣金额'
        },
        number: {
            type: DataTypes.INTEGER,
            comment: '购买数量'
        },
        subtotal: {
            type: DataTypes.DECIMAL(20, 2),
            comment: '小计金额'
        },
        is_product_exists: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
            comment: '商品是否有效'
        },
        remark: {
            type: DataTypes.TEXT,
            comment: '客户商品备注'
        }
    })
};
