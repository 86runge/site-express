/**
 * 商品促销活动关联模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('product_and_promotion', {
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
        window_id: {
            type: DataTypes.UUID,
            comment: '促销活动id'
        },
        name: {
            type: DataTypes.CHAR(45),
            comment: '图片名称'
        },
        start_time: {
            type: DataTypes.DATE,
            comment: '开始时间'
        },
        end_time: {
            type: DataTypes.DATE,
            comment: '结束时间'
        },
        price: {
            type: DataTypes.DECIMAL(20, 2),
            comment: '活动价格'
        },
        image_url: {
            type: DataTypes.STRING,
            comment: '商品图片'
        },
        intro: {
            type: DataTypes.TEXT,
            comment: '商品简介'
        },
        sort: {
            type: DataTypes.INTEGER,
            comment: '排列次序'
        },
        created_time: {
            type: DataTypes.DATE,
            comment: '创建时间'
        }
    })
};
