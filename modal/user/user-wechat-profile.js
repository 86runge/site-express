/**
 * 用户微信资料扩展模型
 * @param sequelize
 * @param DataTypes
 * @returns {*|void}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user_wechat_profile', {
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
        wechat: {
            type: DataTypes.CHAR(30),
            comment: '微信号'
        },
        country: {
            type: DataTypes.CHAR(30),
            comment: '国家'
        },
        province: {
            type: DataTypes.CHAR(30),
            comment: '省份'
        },
        city: {
            type: DataTypes.CHAR(30),
            comment: '城市'
        },
        area: {
            type: DataTypes.CHAR(50),
            comment: '地区'
        },
        language: {
            type: DataTypes.INTEGER,
            comment: '语言'
        },
        sex: {
            type: DataTypes.BOOLEAN,
            comment: '性别(0:女;1:男)'
        },
        head_img_url: {
            type: DataTypes.CHAR(200),
            comment: '头像Url'
        },
        subscribe: {
            type: DataTypes.BOOLEAN,
            comment: '是否订阅公众号'
        },
        subscribe_time: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            comment: '公众号订阅时间'
        },
        union_id: {
            type: DataTypes.CHAR(200),
            comment: '开放平台唯一ID'
        },
        openid_mobile: {
            type: DataTypes.CHAR(200),
            comment: '开放平台移动应用OpenID'
        },
        openid_web: {
            type: DataTypes.CHAR(200),
            comment: '开放平台网站应用OpenID'
        },
        openid_biz: {
            type: DataTypes.CHAR(200),
            comment: '开放平台公众账号/小程序OpenID'
        },
        openid_biz_plugin: {
            type: DataTypes.CHAR(200),
            comment: '开放平台公众号第三方平台OpenID'
        },
        group_id: {
            type: DataTypes.CHAR(200),
            comment: '分组ID'
        },
        user_tag: {
            type: DataTypes.CHAR(50),
            comment: '用户标签'
        },
        created_time: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            comment: '创建时间'
        }
    }, {
        freezeTableName: true
    });
};
