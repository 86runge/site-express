/**
 * 商城配置模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('mall_setting', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            comment: 'id'
        },
        name: {
            type: DataTypes.CHAR(100),
            comment: '地区编号'
        },
        code: {
            type: DataTypes.CHAR(100),
            comment: '地区代码'
        },
        province_code: {
            type: DataTypes.CHAR(10),
            comment: '省份编号'
        },
        city_code: {
            type: DataTypes.CHAR(10),
            comment: '城市编号'
        },
        area_code: {
            type: DataTypes.CHAR(10),
            comment: '区县编号'
        },
        level: {
            type: DataTypes.INTEGER,
            comment: '级数'
        },
        zip: {
            type: DataTypes.CHAR(50),
            comment: '地区名称'
        },

    })
};
