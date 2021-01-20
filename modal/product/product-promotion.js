/**
 * 商品促销活动模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('product_promotion', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            comment: 'id'
        },
        name: {
            type: DataTypes.CHAR(45),
            comment: '活动名称'
        },
        code: {
            type: DataTypes.CHAR(45),
            comment: '活动代码'
        },
        image_url: {
            type: DataTypes.STRING,
            comment: '封面图片url'
        },
        product_count: {
            type: DataTypes.INTEGER,
            comment: '商品数量统计'
        },
        remark: {
            type: DataTypes.TEXT,
            comment: '备注'
        },
        start_time: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            comment: '开始时间'
        },
        end_time: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            comment: '结束时间'
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
    })
};
