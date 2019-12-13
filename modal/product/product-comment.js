/**
 * 商品评论模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('product_comment', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            comment: 'id'
        },
        product_id: {
            type: DataTypes.UUID,
            comment: '商品id'
        },
        user_id: {
            type: DataTypes.UUID,
            comment: '用户编号'
        },
        auditor_id: {
            type: DataTypes.UUID,
            comment: '审核员编号'
        },
        pid: {
            type: DataTypes.UUID,
            comment: '父级评论编号'
        },
        content: {
            type: DataTypes.TEXT,
            comment: '评论内容'
        },
        status: {
            type: DataTypes.INTEGER,
            comment: '状态'
        },
        created_time: {
            type: DataTypes.DATE,
            comment: '创建时间'
        },
        audit_time: {
            type: DataTypes.DATE,
            comment: '审核时间'
        },
        audit_note: {
            type: DataTypes.TEXT,
            comment: '审核备注'
        },
        support_count: {
            type: DataTypes.INTEGER,
            comment: '支持数量'
        },
        oppose_count: {
            type: DataTypes.INTEGER,
            comment: '反对数量'
        },
        report_count: {
            type: DataTypes.INTEGER,
            comment: '举报'
        }
    })
};
