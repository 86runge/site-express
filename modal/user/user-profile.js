/**
 * 用户资料模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user_profile', {
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
        real_name: {
            type: DataTypes.CHAR(30),
            comment: '真实姓名'
        },
        nick_name: {
            type: DataTypes.CHAR(30),
            comment: '昵称'
        },
        sex: {
            type: DataTypes.BOOLEAN,
            comment: '性别(0:女;1:男)'
        },
        user_level: {
            type: DataTypes.INTEGER,
            comment: '用户等级'
        },
        experience: {
            type: DataTypes.INTEGER,
            comment: '用户经验值'
        },
        personal_sign: {
            type: DataTypes.CHAR(200),
            comment: '个性签名'
        },
        personal_title: {
            type: DataTypes.CHAR(200),
            comment: '自定义头像标题'
        },
        face_url: {
            type: DataTypes.CHAR(200),
            comment: '头像Url'
        },
        marital_status: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0,
            comment: '婚姻状况'
        },
        birthday: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            comment: '出生日期'
        },
        education_id: {
            type: DataTypes.INTEGER,
            comment: '教育程度编号'
        },
        register_ip: {
            type: DataTypes.CHAR(50),
            comment: '注册IP'
        },
        register_time: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            comment: '注册时间'
        },
        login_ip: {
            type: DataTypes.CHAR(50),
            comment: '登录IP'
        },
        login_time: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            comment: '登录时间'
        },
        login_count: {
            type: DataTypes.INTEGER,
            comment: '登录次数'
        },
        online_status: {
            type: DataTypes.BOOLEAN,
            comment: '在线状态'
        },
        online_seconds: {
            type: DataTypes.INTEGER,
            comment: '在线总时长'
        },
        unread_msg: {
            type: DataTypes.INTEGER,
            comment: '未读短消息数量'
        }
    }, {
        freezeTableName: true
    });
};
