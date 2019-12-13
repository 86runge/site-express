/**
 * 文件模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('content_file', {
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
        file_name: {
            type: DataTypes.CHAR(100),
            comment: '文件名称'
        },
        file_path: {
            type: DataTypes.CHAR(200),
            comment: '文件路径'
        },
        file_size: {
            type: DataTypes.CHAR(50),
            comment: '文件大小'
        },
        file_type: {
            type: DataTypes.INTEGER,
            comment: '文件类型'
        },
        file_ext: {
            type: DataTypes.CHAR(50),
            comment: '文件后缀'
        },
        visit_count: {
            type: DataTypes.INTEGER,
            comment: '浏览次数'
        },
        reply_count: {
            type: DataTypes.INTEGER,
            comment: '回复次数'
        },
        download_count: {
            type: DataTypes.INTEGER,
            comment: '下载次数'
        },
        image_url: {
            type: DataTypes.CHAR(200),
            comment: '封面图片'
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
