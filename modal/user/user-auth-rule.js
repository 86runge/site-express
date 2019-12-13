/**
 * 用户权限规则模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user_auth_rule', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            comment: 'id'
        },
        rule_name: {
            type: DataTypes.CHAR(30),
            comment: '规则名称'
        },
        rule_code: {
            type: DataTypes.CHAR(30),
            comment: '规则代码'
        },
        parent_rule: {
            type: DataTypes.UUID,
            comment: '上级规则id'
        },
        rule_type: {
            type: DataTypes.INTEGER,
            comment: '规则类型'
        },
        link_url: {
            type: DataTypes.CHAR(200),
            comment: '链接'
        },
        condition: {
            type: DataTypes.CHAR(200),
            comment: '规则条件'
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
    }, {
        freezeTableName: true
    });
};
