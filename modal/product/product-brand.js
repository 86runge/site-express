/**
 * 商品品牌模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('product_brand', {
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
        name: {
            type: DataTypes.CHAR(45),
            comment: '品牌名称'
        },
        image_url: {
            type: DataTypes.STRING,
            comment: '图片url'
        },
        sort: {
            type: DataTypes.INTEGER,
            comment: '排列次序'
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
            comment: '状态'
        },
        created_time: {
            type: DataTypes.DATE,
            comment: '创建时间'
        }
    })
};
