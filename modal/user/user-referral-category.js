/**
 * 用户推广类别模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user_referral_category', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            comment: 'id'
        },
        category_name: {
            type: DataTypes.CHAR(30),
            comment: '类别名称'
        },
        category_code: {
            type: DataTypes.CHAR(30),
            comment: '类别代码'
        },
        parent_category: {
            type: DataTypes.UUID,
            comment: '上级类别id'
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
