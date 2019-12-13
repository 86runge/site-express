/**
 * 商品描述模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('product_description', {
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
        title: {
            type: DataTypes.CHAR(100),
            comment: '标题'
        },
        code: {
            type: DataTypes.CHAR(100),
            comment: '代码'
        },
        content: {
            type: DataTypes.TEXT,
            comment: '内容'
        }
    })
};
