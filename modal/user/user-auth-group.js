/**
 * 用户角色分组模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user_auth_group', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            comment: 'id'
        },
        group_name: {
            type: DataTypes.CHAR(30),
            comment: '分组(角色)名称'
        },
        group_code: {
            type: DataTypes.CHAR(30),
            comment: '分组代码'
        },
        group_rules: {
            type: DataTypes.CHAR(30),
            comment: '权限节点编号集'
        },
        img_url: {
            type: DataTypes.CHAR(200),
            comment: '图标路径'
        },
        note: {
            type: DataTypes.TEXT,
            comment: '备注信息'
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
