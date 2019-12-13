/**
 * 留言反馈模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('content_feedback', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            comment: 'id'
        },
        category_id: {
            type: DataTypes.UUID,
            comment: '类别id'
        },
        serial_no: {
            type: DataTypes.CHAR(200),
            comment: '流水号'
        },
        subject: {
            type: DataTypes.CHAR(200),
            comment: '标题'
        },
        body: {
            type: DataTypes.TEXT,
            comment: '内容'
        },
        message: {
            type: DataTypes.TEXT,
            comment: '消息'
        },
        contacts: {
            type: DataTypes.UUID,
            comment: '联系人'
        },
        mobile: {
            type: DataTypes.CHAR(50),
            comment: '手机号码'
        },
        email: {
            type: DataTypes.CHAR(200),
            comment: '电子邮件'
        },
        qq: {
            type: DataTypes.CHAR(50),
            comment: 'QQ号码'
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
            comment: '状态'
        },
        created_time: {
            type: DataTypes.DATE,
            comment: '创建时间'
        },
        reply_time: {
            type: DataTypes.DATE,
            comment: '回复时间'
        }
    })
};
