/**
 * 号码归属地模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('number_regional', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            comment: 'id'
        },
        show_price: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
            comment: '是否显示价格'
        },
        show_real_price: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0,
            comment: '是否显示真实价格'
        },
        area: {
            type: DataTypes.CHAR(100),
            comment: '地区名称'
        },
        segment_number_length: {
            type: DataTypes.INTEGER,
            comment: '号段长度'
        },
        segment_number: {
            type: DataTypes.INTEGER,
            comment: '号码前段部分'
        },
        segment_number_len3: {
            type: DataTypes.INTEGER,
            comment: '号码前3位'
        },
        number_length: {
            type: DataTypes.INTEGER,
            comment: '号码长度'
        }
    })
};
