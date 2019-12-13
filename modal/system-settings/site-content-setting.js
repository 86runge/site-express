/**
 * 网站内容配置模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('site_content_setting', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            comment: 'id'
        },
        draft_box_status: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
            comment: '是否开启草稿功能'
        },
        auto_save_interval: {
            type: DataTypes.INTEGER,
            comment: '自动保存草稿时间间隔'
        },
        list_rows: {
            type: DataTypes.INTEGER,
            comment: '列表分页每页记录数量'
        },
        reply_list_rows: {
            type: DataTypes.INTEGER,
            comment: '回复列表每页记录数量'
        }
    })
};
