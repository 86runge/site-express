/**
 * 系统自定义配置模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('sys_custom_conf', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            comment: 'id'
        },
        show_real_price: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0,
            comment: '是否显示真实价格'
        },
        conf_title: {
            type: DataTypes.CHAR(100),
            comment: '配置标题'
        },
        conf_name: {
            type: DataTypes.CHAR(100),
            comment: '配置名称'
        },
        conf_datatype: {
            type: DataTypes.INTEGER,
            comment: '配置类型'
        },
        conf_group: {
            type: DataTypes.INTEGER,
            comment: '配置分组'
        },
        conf_prop: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0,
            comment: '配置归属'
        },
        conf_content: {
            type: DataTypes.CHAR(200),
            comment: '配置内容'
        },
        conf_large_content: {
            type: DataTypes.TEXT,
            comment: '配置大内容'
        },
        conf_remark: {
            type: DataTypes.TEXT,
            comment: '配置说明'
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
