/**
 * 用户系统设置模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user_system_conf', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            comment: 'id'
        },
        user_id: {
            type: DataTypes.UUID,
            comment: '用户id'
        },
        theme: {
            type: DataTypes.INTEGER,
            comment: '主题配置'
        },
        language: {
            type: DataTypes.INTEGER,
            comment: '语言编码'
        },
        list_page_size: {
            type: DataTypes.CHAR(50),
            comment: '列表分页尺寸'
        }
    }, {
        freezeTableName: true
    });
};
