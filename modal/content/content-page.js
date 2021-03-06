/**
 * 单页模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('content_page', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            comment: 'id'
        },
        category_id: {
            type: DataTypes.UUID,
            comment: '类别编号'
        },
        summary: {
            type: DataTypes.TEXT,
            comment: '摘要简介'
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
        star: {
            type: DataTypes.INTEGER,
            comment: '用户评分'
        },
        tags: {
            type: DataTypes.INTEGER,
            comment: '内容标签'
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
