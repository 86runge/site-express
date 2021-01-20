/**
 * 文章类别模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('content_article_category', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            comment: 'id'
        },
        name: {
            type: DataTypes.CHAR(50),
            comment: '类别名称'
        },
        code: {
            type: DataTypes.CHAR(100),
            comment: '类别代码'
        },
        parent_id: {
            type: DataTypes.UUID,
            comment: '父级编号'
        },
        article_count: {
            type: DataTypes.INTEGER,
            comment: '包含文章数量'
        },
        image_url: {
            type: DataTypes.CHAR(200),
            comment: '封面图片url'
        },
        link_url: {
            type: DataTypes.CHAR(200),
            comment: '链接地址'
        },
        summary: {
            type: DataTypes.TEXT,
            comment: '摘要介绍'
        },
        remark: {
            type: DataTypes.TEXT,
            comment: '备注'
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
