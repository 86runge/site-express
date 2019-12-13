/**
 * 收货地址模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('delivery_address', {
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
            type: DataTypes.CHAR(45),
            comment: '收件人姓名'
        },
        telephone: {
            type: DataTypes.CHAR(45),
            comment: '联系电话'
        },
        usb_telephone: {
            type: DataTypes.CHAR(45),
            comment: '备用联系电话'
        },
        country: {
            type: DataTypes.CHAR(45),
            comment: '国家'
        },
        province: {
            type: DataTypes.CHAR(45),
            comment: '省份'
        },
        city: {
            type: DataTypes.CHAR(45),
            comment: '城市'
        },
        area: {
            type: DataTypes.CHAR(45),
            comment: '地区'
        },
        street: {
            type: DataTypes.CHAR(200),
            comment: '街道/详细收货地址'
        },
        code: {
            type: DataTypes.CHAR(45),
            comment: '邮政编码'
        },
        is_default_address: {
            type: DataTypes.BOOLEAN,
            comment: '是否默认收货地址'
        },
        created_time: {
            type: DataTypes.DATE,
            comment: '创建时间'
        }
    })
};
