/**
 * 站内信分类
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('private_message_category', {
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
        category_name: {
            type: DataTypes.CHAR(100),
            comment: '分类名称'
        },
        category_code: {
            type: DataTypes.INTEGER,
            comment: '分类代码'
            // inbox:收件箱;outbox:发件箱;drafts:草稿箱;binbox:垃圾箱
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
            defaultValue: DataTypes.NOW,
            comment: '创建时间'
        }
    }, {
        freezeTableName: true
    });
};
