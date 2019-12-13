/**
 * 商品相册模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('product_album', {
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
        name: {
            type: DataTypes.CHAR(45),
            comment: '图片名称'
        },
        image_url: {
            type: DataTypes.STRING,
            comment: '图片url'
        },
        image_size: {
            type: DataTypes.CHAR(45),
            comment: '图片大小'
        },
        width: {
            type: DataTypes.CHAR(45),
            comment: '图片宽度'
        },
        height: {
            type: DataTypes.CHAR(45),
            comment: '图片高度'
        },
        intro: {
            type: DataTypes.TEXT,
            comment: '规格值'
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
