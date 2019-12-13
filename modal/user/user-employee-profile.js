/**
 * 用户企业员工资料扩展模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user_employee_profile', {
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
        attendance_no: {
            type: DataTypes.CHAR(50),
            comment: '考勤编号'
        },
        vocation: {
            type: DataTypes.CHAR(30),
            comment: '职业'
        },
        position: {
            type: DataTypes.CHAR(30),
            comment: '职务'
        },
        title: {
            type: DataTypes.CHAR(30),
            comment: '头衔'
        },
        extension: {
            type: DataTypes.CHAR(50),
            comment: '分机号'
        },
        telephone: {
            type: DataTypes.CHAR(50),
            comment: '座机号'
        }
    }, {
        freezeTableName: true
    });
};
