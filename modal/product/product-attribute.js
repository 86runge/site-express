/**
 * 商品属性模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('product_attribute', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            comment: 'id'
        },
        product_category_id: {
            type: DataTypes.UUID,
            comment: '商品类别编号'
        },
        title: {
            type: DataTypes.CHAR(45),
            comment: '属性标题'
        },
        name: {
            type: DataTypes.CHAR(200),
            comment: '属性全称'
        },
        description: {
            type: DataTypes.TEXT,
            comment: '属性描述'
        },
        content: {
            type: DataTypes.CHAR(45),
            comment: '属性预设内容'
        },
        value: {
            type: DataTypes.CHAR(45),
            comment: '属性默认值'
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
