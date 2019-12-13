/**
 * 用户部门模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user_auth_department', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            comment: 'id'
        },
        department_name: {
            type: DataTypes.CHAR(30),
            comment: '部门名称'
        },
        department_code: {
            type: DataTypes.CHAR(30),
            comment: '部门代码'
        },
        department_rules: {
            type: DataTypes.CHAR(30),
            comment: '权限节点编号集'
        },
        parent_department: {
            type: DataTypes.UUID,
            comment: '上级部门id'
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
