/**
 *文章模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('content_article', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            comment: 'id'
        },
        title: {
            type: DataTypes.CHAR(100),
            comment: '文章标题'
        },
        category_id: {
            type: DataTypes.UUID,
            comment: '文章类别id'
        },
        style_id: {
            type: DataTypes.UUID,
            comment: '文章样式id'
        },
        summary: {
            type: DataTypes.TEXT,
            comment: '摘要简介'
        },
        author: {
            type: DataTypes.CHAR(100),
            comment: '作者'
        },
        source: {
            type: DataTypes.CHAR(100),
            comment: '来源'
        },
        meta_keywords: {
            type: DataTypes.CHAR(100),
            comment: 'meta关键词'
        },
        meta_description: {
            type: DataTypes.TEXT,
            comment: 'meta描述'
        },
        content: {
            type: DataTypes.TEXT,
            comment: '文档内容'
        },
        image_url: {
            type: DataTypes.CHAR(200),
            comment: '图片路径'
        },
        visit_count: {
            type: DataTypes.INTEGER,
            comment: '浏览次数'
        },
        reply_count: {
            type: DataTypes.INTEGER,
            comment: '回复次数'
        },
        user_id: {
            type: DataTypes.UUID,
            comment: '文章标题'
        },
        content_tags: {
            type: DataTypes.CHAR(100),
            comment: '文章标签'
        },
        access: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
            comment: '访问权限'
        },
        is_share: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
            comment: '是否分享'
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
        },
        update_time: {
            type: DataTypes.DATE,
            comment: '更新时间'
        }
    })
};
