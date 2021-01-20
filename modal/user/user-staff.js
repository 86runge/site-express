/**
 * 员工模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user_staff', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            comment: 'id'
        },
        user_id: {
            type: DataTypes.UUID,
            comment: '用户名'
        },
        job_no: {
            type: DataTypes.CHAR(30),
            comment: '工号'
        },
        department_id: {
            type: DataTypes.UUID,
            comment: '部门id'
        },
        post_id: {
            type: DataTypes.UUID,
            comment: '职务id'
        },
        post_level_id: {
            type: DataTypes.UUID,
            comment: '职级id'
        },
        entry_time: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            comment: '入职时间'
        },
        post_time: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            comment: '任职时间'
        },
        working_years: {
            type: DataTypes.INTEGER,
            comment: '工龄'
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
            comment: '员工状态'
        }
    }, {
        freezeTableName: true
    });
};
