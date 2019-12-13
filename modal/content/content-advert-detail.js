/**
 * 广告内容模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('content_advert_detail', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            comment: 'id'
        },
        advert_code: {
            type: DataTypes.CHAR(200),
            comment: '广告表代码'
        },
        title: {
            type: DataTypes.CHAR(100),
            comment: '标题'
        },
        file_path: {
            type: DataTypes.CHAR(200),
            comment: '英文名称'
        },
        file_size: {
            type: DataTypes.INTEGER,
            comment: '文件大小'
        },
        file_type: {
            type: DataTypes.INTEGER,
            comment: '文件类型'
        },
        link_url: {
            type: DataTypes.CHAR(200),
            comment: '链接地址'
        },
        open_target: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
            comment: '链接打开方式(0:当前页,1:新开页面)'
        },
        visit_count: {
            type: DataTypes.INTEGER,
            comment: '浏览次数'
        },
        click_count: {
            type: DataTypes.INTEGER,
            comment: '点击次数'
        },
        sort: {
            type: DataTypes.INTEGER,
            comment: '排列次序'
        },
        is_period_time: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0,
            comment: '是否周期时间'
        },
        duration_time: {
            type: DataTypes.DATE,
            comment: '有效期'
        },
        begin_time: {
            type: DataTypes.DATE,
            comment: '生效时间'
        },
        end_time: {
            type: DataTypes.DATE,
            comment: '失效时间'
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
