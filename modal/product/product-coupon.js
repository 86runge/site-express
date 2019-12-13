/**
 * 商品优惠券模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('product_coupon', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            comment: 'id'
        },
        serial_no: {
            type: DataTypes.CHAR(45),
            comment: '序列号'
        },
        name: {
            type: DataTypes.CHAR(45),
            comment: '优惠券名称'
        },
        face_value: {
            type: DataTypes.DECIMAL(20, 2),
            comment: '优惠券面值'
        },
        quantity: {
            type: DataTypes.INTEGER,
            comment: '优惠券数量'
        },
        condition_value: {
            type: DataTypes.INTEGER,
            comment: '使用条件'
        },
        condition_desc: {
            type: DataTypes.TEXT,
            comment: '使用条件说明'
        },
        start_time: {
            type: DataTypes.DATE,
            comment: '生效时间'
        },
        end_time: {
            type: DataTypes.DATE,
            comment: '失效时间'
        },
        sort: {
            type: DataTypes.INTEGER,
            comment: '排列次序'
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0,
            comment: '状态'
        },
        created_time: {
            type: DataTypes.DATE,
            comment: '创建时间'
        }
    })
};
