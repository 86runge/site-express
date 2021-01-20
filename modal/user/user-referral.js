/**
 * 用户推广模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user_referral', {
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
        referral_code: {
            type: DataTypes.CHAR(100),
            comment: '推广代码'
        },
        referral_category: {
            type: DataTypes.UUID,
            comment: '推广类别id'
        },
        condition_value: {
            type: DataTypes.CHAR(100),
            comment: '完成条件'
        },
        condition_desc: {
            type: DataTypes.TEXT,
            comment: '完成条件说明'
        },
        visit_count: {
            type: DataTypes.INTEGER,
            comment: '访问量'
        },
        register_count: {
            type: DataTypes.INTEGER,
            comment: '注册量'
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
