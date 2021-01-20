/**
 * 图片模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('content_picture', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            comment: 'id'
        },
        category_id: {
            type: DataTypes.UUID,
            comment: '类别id'
        },
        title: {
            type: DataTypes.CHAR(200),
            comment: '标题'
        },
        image_url: {
            type: DataTypes.CHAR(200),
            comment: '图片路径'
        },
        image_size: {
            type: DataTypes.CHAR(100),
            comment: '图片大小'
        },
        image_width: {
            type: DataTypes.CHAR(100),
            comment: '图片宽度'
        },
        image_height: {
            type: DataTypes.CHAR(100),
            comment: '图片高度'
        },
        summary: {
            type: DataTypes.TEXT,
            comment: '图片简介'
        },
        visit_count: {
            type: DataTypes.INTEGER,
            comment: '浏览次数'
        },
        reply_count: {
            type: DataTypes.INTEGER,
            comment: '回复次数'
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
