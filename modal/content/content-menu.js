/**
 * 网站菜单模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('content_menu', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            comment: 'id'
        },
        title: {
            type: DataTypes.CHAR(200),
            comment: '菜单名称'
        },
        code: {
            type: DataTypes.CHAR(200),
            comment: '菜单代号'
        },
        link_type: {
            type: DataTypes.BOOLEAN,
            comment: '链接类型(0:图片链接,1:文字链接)'
        },
        parent_id: {
            type: DataTypes.UUID,
            comment: '父级id'
        },
        image_url: {
            type: DataTypes.CHAR(200),
            comment: '图片url'
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
        is_lock: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
            comment: '是否锁定'
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
