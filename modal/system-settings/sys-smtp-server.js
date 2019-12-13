/**
 * 邮件服务器模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('sys_smtp_server', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            comment: 'id'
        },
        host: {
            type: DataTypes.CHAR(45),
            comment: 'SMTP服务器地址'
        },
        port: {
            type: DataTypes.CHAR(45),
            comment: '端口号'
        },
        login_id: {
            type: DataTypes.CHAR(45),
            comment: 'SMTP帐号'
        },
        password: {
            type: DataTypes.CHAR(45),
            comment: 'SMTP密码'
        },
        smtp_auth: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
            comment: '是否启用SMTP认证'
        },
        secure: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
            comment: '是否加密'
        },
        from_address: {
            type: DataTypes.CHAR(45),
            comment: '发信邮箱'
        },
        from_name: {
            type: DataTypes.CHAR(20),
            comment: '发信人'
        },
        send_interval: {
            type: DataTypes.INTEGER,
            comment: '发送间隔时间'
        },
        daily_count_max: {
            type: DataTypes.INTEGER,
            comment: '每日发信限额'
        },
        today_count: {
            type: DataTypes.INTEGER,
            comment: '今日发信量'
        },
        total_count: {
            type: DataTypes.INTEGER,
            comment: '历史发信量'
        },
        note: {
            type: DataTypes.TEXT,
            comment: '备注'
        },
        sort: {
            type: DataTypes.INTEGER,
            comment: '排列次序'
        },
        status: {
            type: DataTypes.INTEGER,
            comment: '状态'
        },
        created_time: {
            type: DataTypes.DATE,
            comment: '创建时间'
        },
        last_send_time: {
            type: DataTypes.DATE,
            comment: '最后发送时间'
        }
    })
};
