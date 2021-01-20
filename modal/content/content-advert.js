/**
 * 广告模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('content_advert', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            comment: 'id'
        },
        location: {
            type: DataTypes.INTEGER,
            comment: '位置'
        },
        channel: {
            type: DataTypes.INTEGER,
            comment: '频道'
        },
        name: {
            type: DataTypes.CHAR(200),
            comment: '名称'
        },
        title: {
            type: DataTypes.CHAR(100),
            comment: '标题'
        },
        code: {
            type: DataTypes.CHAR(100),
            comment: '英文名称'
        },
        type: {
            type: DataTypes.INTEGER,
            comment: '广告类型'
        },
        group: {
            type: DataTypes.INTEGER,
            comment: '广告分组'
        },
        media_count: {
            type: DataTypes.INTEGER,
            comment: '媒体数量'
        },
        media_width: {
            type: DataTypes.CHAR(50),
            comment: '媒体宽度'
        },
        media_height: {
            type: DataTypes.CHAR(50),
            comment: '媒体高度'
        },
        media_type: {
            type: DataTypes.CHAR(50),
            comment: '媒体文件格式'
        },
        media_size: {
            type: DataTypes.CHAR(50),
            comment: '媒体文件大小规格'
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
        },
        updated_time: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            comment: '更新时间'
        }
    })
};
