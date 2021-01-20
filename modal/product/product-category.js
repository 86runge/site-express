/**
 * 商品类别模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('product_category', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            comment: 'id'
        },
        title: {
            type: DataTypes.CHAR(45),
            comment: '类别名称'
        },
        code: {
            type: DataTypes.CHAR(45),
            comment: '类别代码'
        },
        parent_id: {
            type: DataTypes.UUID,
            comment: '父级id'
        },
        product_count: {
            type: DataTypes.INTEGER,
            comment: '包含商品数量'
        },
        meta_key: {
            type: DataTypes.CHAR(45),
            comment: 'meta关键词'
        },
        meta_note: {
            type: DataTypes.TEXT,
            comment: 'meta描述'
        },
        is_lock: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
            comment: '是否锁定'
        },
        image_url: {
            type: DataTypes.STRING,
            comment: '封面图片url'
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
            defaultValue: DataTypes.NOW,
            comment: '创建时间'
        }
    })
};
