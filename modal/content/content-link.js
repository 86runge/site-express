/**
 * 友情链接模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('content_link', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            comment: 'id'
        },
        title: {
            type: DataTypes.CHAR(200),
            comment: '链接标题'
        },
        link_url: {
            type: DataTypes.CHAR(200),
            comment: '链接地址'
        },
        link_type: {
            type: DataTypes.BOOLEAN,
            comment: '链接类型(0:图片链接,1:文字链接)'
        },
        image_url: {
            type: DataTypes.CHAR(200),
            comment: '图片路径'
        },
        remark: {
            type: DataTypes.TEXT,
            comment: '内容标签'
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
