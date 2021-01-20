/**
 * 用户安全设置模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user_security_conf', {
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
        question1: {
            type: DataTypes.CHAR(100),
            comment: '密保问题1'
        },
        answer1: {
            type: DataTypes.CHAR(100),
            comment: '密保答案1'
        },
        question2: {
            type: DataTypes.CHAR(100),
            comment: '密保问题2'
        },
        answer2: {
            type: DataTypes.CHAR(100),
            comment: '密保答案2'
        },
        question3: {
            type: DataTypes.CHAR(100),
            comment: '密保问题3'
        },
        answer3: {
            type: DataTypes.CHAR(100),
            comment: '密保答案3'
        },
        created_time: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            comment: '创建时间'
        },
        modify_time: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            comment: '修改时间'
        }
    }, {
        freezeTableName: true
    });
};
