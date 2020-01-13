/**
 * 用户操作日志模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user_operate_log', {
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
        operate_desc: {
            type: DataTypes.TEXT,
            comment: '操作描述'
        },
        operate_type: {
            type: DataTypes.INTEGER,
            comment: '操作类型'
        },
        operate_ip: {
            type: DataTypes.CHAR(50),
            comment: '操作IP'
        },
        operate_time: {
            type: DataTypes.DATE,
            comment: '操作时间'
        },
        operate_params: {
            type: DataTypes.CHAR(100),
            comment: '操作参数'
        },
        result_status: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
            comment: '操作结果'
        }
    }, {
        freezeTableName: true
    });
};
