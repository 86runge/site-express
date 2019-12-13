/**
 * 站内信模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('private_message', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            comment: 'id'
        },
        category_id: {
            type: DataTypes.UUID,
            comment: '站内信分类编号'
        },
        from_user: {
            type: DataTypes.UUID,
            comment: '发件人'
        },
        to_user: {
            type: DataTypes.UUID,
            comment: '收件人'
        },
        from_alias: {
            type: DataTypes.CHAR(200),
            comment: '发件人别名'
        },
        subject: {
            type: DataTypes.CHAR(200),
            comment: '消息标题'
        },
        body: {
            type: DataTypes.TEXT,
            comment: '消息内容'
        },
        send_status: {
            type: DataTypes.INTEGER,
            comment: '发送状态'
        },
        read_status: {
            type: DataTypes.BOOLEAN,
            comment: '阅读状态'
        },
        delete_status: {
            type: DataTypes.BOOLEAN,
            comment: '删除状态'
        },
        star: {
            type: DataTypes.BOOLEAN,
            comment: '星级标注'
        },
        read_time: {
            type: DataTypes.DATE,
            comment: '阅读时间'
        },
        created_time: {
            type: DataTypes.DATE,
            comment: '创建时间'
        },
        send_time: {
            type: DataTypes.DATE,
            comment: '发送时间'
        }
    }, {
        freezeTableName: true
    });
};
