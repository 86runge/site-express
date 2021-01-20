/**
 * 商品日志模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('product_log', {
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
        user_ip: {
            type: DataTypes.CHAR(45),
            comment: '用户IP'
        },
        value: {
            type: DataTypes.CHAR(45),
            comment: '规格值'
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
            comment: '操作状态'
        },
        created_time: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            comment: '创建时间'
        }
    })
};
